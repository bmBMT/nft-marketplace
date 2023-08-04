import { useForm } from 'react-hook-form'
import FirstStep from './FirstStep/FirstStep'
import { useContext, useState } from 'react'
import SecondStep from './SecondStep/SecondStep'
import TwoStepForm from '@/components/TwoStepForm/TwoStepForm'
import { Context } from '@/main'
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {
  const [isFirstStep, setIsFirstStep] = useState(true)
  const { UserStore } = useContext(Context)
  const [serverError, setServerError] = useState('')
  const navigate = useNavigate()

  const {
    register,
    watch,
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  })

  async function onSubmit(data) {
    const { username, email, password, img } = data
    const imgValue = img.value
    const _img = imgValue.slice(imgValue.lastIndexOf('/') + 1, -4)

    const error = await UserStore.registration(username, email, password, _img)
    if (error) {
      setServerError(error)
    } else {
      navigate('/')
    }
  }

  function prevStep(e) {
    e.preventDefault()
    setIsFirstStep(true)
  }

  function nextStep(e) {
    e.preventDefault()
    setIsFirstStep(false)
  }

  return (
    <TwoStepForm
      firstStep={
        <FirstStep
          register={register}
          errors={errors}
          watch={watch}
          nextStep={nextStep}
          isValid={isValid}
        />
      }
      secondStep={
        <SecondStep
          register={register}
          isValid={isValid}
          control={control}
          prevStep={prevStep}
          watch={watch}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          serverError={serverError}
        />
      }
      isFirstStep={isFirstStep}
    />
  )
}

export default SignUpForm
