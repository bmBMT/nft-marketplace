import Input from '@/components/Input/Input'
import lockIcon from '@/assets/icons/LockKey.svg'
import { errorMessages } from '@/utils/constants'

const ConfirmPasswordInput = ({ register, watch, errors }) => {
  return (
    <Input
      icon={lockIcon}
      type="password"
      placeholder="Confirm Password"
      error={errors?.confirmPassword?.message}
      {...register('confirmPassword', {
        required: errorMessages.required,
        validate: (val) => {
          if (watch('password') !== val) {
            return errorMessages.confirmPassword
          }
        },
      })}
    />
  )
}

export default ConfirmPasswordInput
