import Col from '@/components/Col/Col'
import Button from '@/components/Button/Button'
import UsernameInput from '@/views/UserAuth/FormFields/UsernameInput/UsernameInput'
import EmailInput from '@/views/UserAuth/FormFields/EmailInput/EmailInput'
import PasswordInput from '@/views/UserAuth/FormFields/PasswordInput/PasswordInput'
import ConfirmPasswordInput from '@/views/UserAuth/FormFields/ConfirmPasswordInput/ConfirmPasswordInput'

const FirstStep = ({ register, errors, watch, nextStep, isValid }) => {
  return (
    <Col gap={30}>
      <Col gap={15}>
        <UsernameInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <ConfirmPasswordInput register={register} watch={watch} errors={errors} />
      </Col>
      <Button disabled={!isValid} onClick={nextStep} width="100%" size={'tertiary'}>
        Next Step
      </Button>
    </Col>
  )
}

export default FirstStep
