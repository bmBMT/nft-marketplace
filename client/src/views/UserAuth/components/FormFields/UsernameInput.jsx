import userIcon from '@/assets/icons/User.svg'
import Input from '@/components/Input/Input.jsx'
import { errorMessages } from '@/utils/constants/index.js'
import { memo } from 'react'

const UsernameInput = ({ register, errors }) => {
  return (
    <Input
      icon={userIcon}
      type="text"
      placeholder="Username"
      error={errors?.username?.message}
      {...register('username', {
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

export default memo(UsernameInput)
