import Input from '@/components/Input/Input.jsx'
import lockIcon from '@/assets/icons/LockKey.svg'
import { errorMessages } from '@/utils/constants/index.js'
import { memo } from 'react'

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

export default memo(ConfirmPasswordInput)
