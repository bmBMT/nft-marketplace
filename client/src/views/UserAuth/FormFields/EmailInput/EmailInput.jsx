import mailIcon from '@/assets/icons/EnvelopeSimple.svg'
import Input from '@/components/Input/Input'
import { errorMessages } from '@/utils/constants'

const EmailInput = ({ register, errors }) => {
  return (
    <Input
      icon={mailIcon}
      type="email"
      placeholder="Email Address"
      error={errors?.email?.message}
      {...register('email', {
        required: errorMessages.required,
        pattern: {
          value:
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: errorMessages.email,
        },
      })}
    />
  )
}

export default EmailInput
