import { useForm } from 'react-hook-form'
import { useCallback, useContext, useState } from 'react'
import { Context } from '@/main.jsx'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/Button/Button.jsx'
import Col from '@/components/Col/Col.jsx'
import EmailInput from '../components/FormFields/EmailInput.jsx'
import PasswordInput from '../components/FormFields/PasswordInput.jsx'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.jsx'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import NavigationLink from '@/components/NavigationLink/NavigationLink'

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

  const onSubmit = useCallback(async (data) => {
    const { email, password } = data

    const error = await UserStore.login(email, password)
    if (error) {
      setServerError(error)
    } else {
      navigate('/')
    }
  }, []);

  return (
    <form style={{ maxWidth }} noValidate>
      <Col gap={30}>
        <Col gap={15} alignItems="flex-end">
          <EmailInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />
          <NavigationLink to="/signup" width="fit-content" height="fit-content">
            SignUp
          </NavigationLink>
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
