import NavigationLogo from '@/views/Navigation/NavigationLogo/NavigationLogo'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import Col from '@/components/Col/Col'
import { memo } from 'react'
import FooterIcons from '../../FooterIcons/FooterIcons'

const FooterMainInfo = () => {
  const { isDesktop } = useDeviceWidth()

  return (
    <>
      <Col gap={'30px'}>
        <NavigationLogo />  
        <Col gap={'20px'} maxWidth={isDesktop ? '238px' : '690px'}>
          <div>NFT marketplace UI created with Anima for Figma.</div>
          <div>Join our community</div>
          <FooterIcons />
        </Col>
      </Col>

    </>
  )
}

export default memo(FooterMainInfo)
