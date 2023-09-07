import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import Container from '@/components/Container/Container'

import Col from '@/components/Col/Col'
import { memo } from 'react';
import FooterInfo from './sections/FooterInfo';
import FooterPrescription from './sections/FooterPrescription';

const Footer = () => {
  const { isPhone } = useDeviceWidth()

  // const { isDesktop, isTablet, isPhone } = useDeviceWidth()
  // const padding = isDesktop ? '40px 40px' : isTablet ? '40px 0px' : '40px 0px'
// Ширина перехода в режим isTablet

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

export default memo(Footer)
