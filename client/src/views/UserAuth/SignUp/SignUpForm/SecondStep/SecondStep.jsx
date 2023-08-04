import Col from '@/components/Col/Col'
import Btns from './Btns/Btns'
import SelectAvatar from '@/views/UserAuth/FormFields/SelectAvatar/SelectAvatar'

const SecondStep = ({ prevStep, handleSubmit, onSubmit, isValid, control, watch, serverError }) => {
  return (
    <Col gap={30}>
      <SelectAvatar
        control={control}
        watch={watch}
      />
      <Btns
        handleSubmit={handleSubmit}
        isValid={isValid}
        onSubmit={onSubmit}
        prevStep={prevStep}
        serverError={serverError}
      />
    </Col>
  )
}

export default SecondStep
