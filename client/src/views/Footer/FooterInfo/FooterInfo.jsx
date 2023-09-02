import Col from '@/components/Col/Col'
import Row from '@/components/Row/Row'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import { memo } from 'react';
import FooterInformation from './FooterInformation/FooterInformation';

const FooterInfo = () => {
  const { isDesktop } = useDeviceWidth()

  return isDesktop ? (
    <Row justifyContent={'space-between'} alignItems={'start'} gap={'20px'}>
      <FooterInformation/>
    </Row>
  ) : (
    <Col gap={'30px'}><FooterInformation/></Col>
  )
}

export default memo(FooterInfo)
