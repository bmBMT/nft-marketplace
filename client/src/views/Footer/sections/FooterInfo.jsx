import Col from '@/components/Col/Col'
import Row from '@/components/Row/Row'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import { memo } from 'react';

import FooterMainInfo from '../components/FooterMainInfo';
import FooterExplorePages from '../components/FooterExplorePages';
import FooterSubscribe from '../components/FooterSubscribe';

const FooterInfo = () => {
  const { isDesktop } = useDeviceWidth()

  return isDesktop ? (
    <Row justifyContent={'space-between'} alignItems={'start'} gap={'20px'}>
      <FooterMainInfo/>
      <FooterExplorePages/>
      <FooterSubscribe/>
    </Row>
  ) : (
    <Col gap={'30px'}>
      <FooterMainInfo/>
      <FooterExplorePages/>
      <FooterSubscribe/>
    </Col>
  )
}

export default memo(FooterInfo)
