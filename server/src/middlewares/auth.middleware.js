import ApiError from "../exceptions/api.error.js";
import tokenService from "../service/token.service.js";

export default function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(ApiError.UnathorizedError())
    }

    const accessToken = authorizationHeader.replace('Bearer ', '');
    if (!accessToken) {
      return next(ApiError.UnathorizedError())
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(ApiError.UnathorizedError())
    }

    req.user = userData;
    next();
  } catch (e) {
    return next(ApiError.UnathorizedError())
  }
}