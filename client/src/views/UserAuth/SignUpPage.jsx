import Row from '@/components/Row/Row.jsx'
import Col from '@/components/Col/Col.jsx'
import SignUpForm from './sections/SignUpForm.jsx'
import ImagePlaceholder from './sections/ImagePlaceholder.jsx'
import Head from './sections/Head.jsx'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'

const SignUpPage = () => {
  const { isDesktop, isTablet, isPhone } = useDeviceWidth()
  const gap = isDesktop ? 60 : isTablet ? 40 : 0
  const flexDirection = isPhone && 'column'
  const padding = isDesktop || isTablet ? '80px 0' : '30px 30px 40px'

  return (
    <main>
      <Row minHeight={615} gap={gap} flexDirection={flexDirection}>
        <ImagePlaceholder />
        <Col gap={40} width="100%" padding={padding}>
          <Head title="Create Account" />
          <SignUpForm />
        </Col>
      </Row>
    </main>
  )
}

export default SignUpPage
