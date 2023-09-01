import Input from '@/components/Input/Input.jsx'
import lockIcon from '@/assets/icons/LockKey.svg'
import { errorMessages } from '@/utils/constants/index.js'
import { memo } from 'react'

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

export default memo(PasswordInput)
