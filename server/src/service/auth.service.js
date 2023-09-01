import UserModel from '../models/user.model.js'
import bcrypt from 'bcrypt'
import TokenService from './token.service.js'
import UserDto from '../dtos/user.dto.js'
import ApiError from '../exceptions/api.error.js'
import WalletService from './wallet.service.js'
import HandleUserPictures from '../utils/handlerUserPictures.js'

class UserService {
  async registration(username, email, password) {
    const usernameCandidate = await UserModel.findOne({ username });
    if (usernameCandidate) {
      throw ApiError.BadRequest('Username already in use')
    }
    const emailCandidate = await UserModel.findOne({ email });
    if (emailCandidate) {
      throw ApiError.BadRequest('This email is already taken')
    }

    const hashPassword = await bcrypt.hash(password, 3);

    const user = await UserModel.create({ username, email, password: hashPassword })
    const userDto = new UserDto(user);

    const tokens = TokenService.generateTokens({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    const wallet = await WalletService.createWallet(userDto.id);

    return { ...tokens, user: userDto, wallet }
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest('User with this email was not found')
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest('Incorrect password')
    }

    const handledUser = await HandleUserPictures(user);

    const userDto = new UserDto(handledUser);
    const tokens = TokenService.generateTokens({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);
    const wallet = await WalletService.findWallet(userDto.id);

    return { ...tokens, user: userDto, wallet }
  }

  async logout(refreshToken) {
    return await TokenService.removeToken(refreshToken);
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnathorizedError();
    }
    const userData = TokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await TokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnathorizedError();
    }
    
    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);
    const wallet = await WalletService.findWallet(userDto.id);

    return { ...tokens, user: userDto, wallet }
  }
}

export default new UserService();