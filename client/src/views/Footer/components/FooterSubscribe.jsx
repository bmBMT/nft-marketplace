import InputSubscribe from '@/components/InputSubscribe/InputSubscribe'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import Col from '@/components/Col/Col'
import { memo } from 'react'

const FooterSubscribe = () => {
  const { isDesktop } = useDeviceWidth()

  return (
    <>
      <Col gap={'30px'} width={isDesktop ? '420px' : ''}>
        <h5 style={{ fontFamily: 'Space Mono', color: '#FFFFFF' }}>Join Our Weekly Digest</h5>
        <Col gap={'20px'} maxWidth={isDesktop ? '330px' : '690px'}>
          <div>Get exclusive promotions & updates straight to your inbox.</div>
        </Col>
        <InputSubscribe />
      </Col>
    </>
  )
}

export default memo(FooterSubscribe)
