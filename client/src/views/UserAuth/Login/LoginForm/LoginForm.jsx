import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { Context } from '@/main'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@/components/Button/Button'
import Col from '@/components/Col/Col'
import EmailInput from '../../FormFields/EmailInput/EmailInput'
import PasswordInput from '../../FormFields/PasswordInput/PasswordInput'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'

const LoginForm = () => {
  const { isDesktop, isTablet } = useDeviceWidth()
  const maxWidth = isDesktop || isTablet ? 330 : 'none'
  const { UserStore } = useContext(Context)
  const [serverError, setServerError] = useState('')
  const navigate = useNavigate()

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  })

  async function onSubmit(data) {
    const { email, password } = data

    const error = await UserStore.login(email, password)
    if (error) {
      setServerError(error)
    } else {
      navigate('/')
    }
  }

  return (
    <form style={{ maxWidth }} noValidate>
      <Col gap={30}>
        <Col gap={15} alignItems="flex-end">
          <EmailInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />
          <Link style={{ position: 'relative', right: 20, fontWeight: 600 }} to="/signup">
            SignUp
          </Link>
        </Col>
        <ErrorMessage error={serverError} />
        <Button disabled={!isValid} size={'tertiary'} onClick={handleSubmit(onSubmit)}>
          Sign In
        </Button>
      </Col>
    </form>
  )
}

export default LoginForm
