import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import Container from '@/components/Container/Container'
import FooterInfo from './FooterInfo/FooterInfo'
import FooterPrescription from './FooterPrescription/FooterPrescription'
import Col from '@/components/Col/Col'

const Footer = () => {
  const { isDesktop, isTablet, isPhone } = useDeviceWidth()
  const padding = isDesktop ? '40px 195px' : isTablet ? '15px 50px' : '15px 30px'

  return (
    <footer style={{ backgroundColor: '#3B3B3B' }}>
      <Container>
        <Col gap={isPhone ? '30px' : '49px'} color={'#CCCCCC'} padding={'40px 0'}>
        <FooterInfo/>
        <FooterPrescription/>
        </Col>
      </Container>
    </footer>
  )
}

export default Footer
