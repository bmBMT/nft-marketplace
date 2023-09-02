import Col from '@/components/Col/Col'
import Row from '@/components/Row/Row'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import FooterInfoData from './FooterInfoData/FooterinfoData'
import { memo } from 'react';

const FooterInfo = () => {
  const { isDesktop } = useDeviceWidth()

  return isDesktop ? (
    <Row justifyContent={'space-between'} alignItems={'start'} gap={'20px'}>
      <FooterInfoData/>
    </Row>
  ) : (
    <Col gap={'30px'}><FooterInfoData/></Col>
  )
}

export default memo(FooterInfo)
