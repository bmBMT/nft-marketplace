import Col from '@/components/Col/Col.jsx'
import Row from '@/components/Row/Row.jsx'
import ImagePlaceholder from './sections/ImagePlaceholder.jsx'
import Head from './sections/Head.jsx'
import LoginForm from './sections/LoginForm.jsx'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'

const LoginPage = () => {
  const { isDesktop, isTablet, isPhone } = useDeviceWidth()
  const gap = isDesktop ? 60 : isTablet ? 40 : 0
  const flexDirection = isPhone && 'column'
  const padding = isDesktop || isTablet ? '80px 0' : '30px 30px 40px'

  return (
    <main>
      <Row minHeight={615} gap={gap} flexDirection={flexDirection}>
        <ImagePlaceholder />
        <Col gap={40} width="100%" padding={padding}>
          <Head title="Sign In" />
          <LoginForm />
        </Col>
      </Row>
    </main>
  )
}

export default LoginPage
