import Input from '@/components/Input/Input'
import lockIcon from '@/assets/icons/LockKey.svg'
import { errorMessages } from '@/utils/constants'

const PasswordInput = ({ register, errors }) => {
  return (
    <Input
      icon={lockIcon}
      type="password"
      placeholder="Password"
      error={errors?.password?.message}
      {...register('password', {
        required: errorMessages.required,
        minLength: {
          value: 3,
          message: errorMessages.minLength(3),
        },
        maxLength: {
          value: 16,
          message: errorMessages.maxLength(16),
        },
      })}
    />
  )
}

export default PasswordInput
