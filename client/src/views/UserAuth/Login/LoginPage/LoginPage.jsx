import Col from '@/components/Col/Col'
import Row from '@/components/Row/Row'
import ImagePlaceholder from '../../ImagePlaceholder/ImagePlaceholder'
import Header from '../../Header/Header'
import LoginForm from '../LoginForm/LoginForm'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'

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
          <Header text="Sign In" />
          <LoginForm />
        </Col>
      </Row>
    </main>
  )
}

export default LoginPage
