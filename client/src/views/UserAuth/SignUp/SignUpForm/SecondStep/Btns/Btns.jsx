import Button from '@/components/Button/Button'
import Col from '@/components/Col/Col'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import Row from '@/components/Row/Row'

const Btns = ({ prevStep, handleSubmit, onSubmit, isValid, serverError }) => {
  return (
    <Col>
      <ErrorMessage error={serverError} />
      <Row gap={24}>
        <Button onClick={prevStep} width="100%" size={'tertiary'}>
          Prev Step
        </Button>
        <Button onClick={handleSubmit(onSubmit)} disabled={!isValid} width="100%" size={'tertiary'}>
          Create Account
        </Button>
      </Row>
    </Col>
  )
}

export default Btns
