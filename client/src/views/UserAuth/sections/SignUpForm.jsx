import { useForm } from 'react-hook-form'
import { useCallback, useContext, useState } from 'react'
import { Context } from '@/main.jsx'
import { useNavigate } from 'react-router-dom'
import Col from '@/components/Col/Col.jsx'
import UsernameInput from '../components/FormFields/UsernameInput.jsx'
import EmailInput from '../components/FormFields/EmailInput.jsx'
import PasswordInput from '../components/FormFields/PasswordInput.jsx'
import ConfirmPasswordInput from '../components/FormFields/ConfirmPasswordInput.jsx'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.jsx'
import Button from '@/components/Button/Button.jsx'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'

const SignUpForm = () => {
  const { UserStore } = useContext(Context)
  const [serverError, setServerError] = useState('')
  const navigate = useNavigate()
  const { isDesktop, isTablet } = useDeviceWidth()

  const maxWidth = isDesktop || isTablet ? 330 : 'none'

  const {
    register,
    watch,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  })

  const onSubmit = useCallback(async (data) => {
    const { username, email, password } = data

    const error = await UserStore.registration(username, email, password)
    if (error) {
      setServerError(error)
    } else {
      navigate('/')
    }
  }, []);

  return (
    <form style={{ maxWidth }} noValidate>
      <Col gap={30}>
        <Col gap={15}>
          <UsernameInput register={register} errors={errors} />
          <EmailInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />
          <ConfirmPasswordInput register={register} watch={watch} errors={errors} />
        </Col>
        <Col>
          <ErrorMessage error={serverError} />
          <Button onClick={handleSubmit(onSubmit)} disabled={!isValid} width="100%" size="tertiary">
            Create Account
          </Button>
        </Col>
      </Col>
    </form>
  )
}

export default SignUpForm
