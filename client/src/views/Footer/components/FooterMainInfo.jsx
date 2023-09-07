import NavigationLogo from '@/views/Navigation/NavigationLogo/NavigationLogo'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import Col from '@/components/Col/Col'
import { memo } from 'react'
import DiscordLogo from '@/assets/icons/DiscordLogo.svg'
import YoutubedLogo from '@/assets/icons/YoutubeLogo.svg'
import TwitterLogo from '@/assets/icons/TwitterLogo.svg'
import InstagramLogo from '@/assets/icons/InstagramLogo.svg'
import Row from '@/components/Row/Row'
import CustomLink from '@/components/CustomLink/CustomLink'


const FooterMainInfo = () => {
  const { isDesktop } = useDeviceWidth()

  return (
    <>
      <Col gap={'30px'}>
        <NavigationLogo />
        <Col gap={'20px'} maxWidth={isDesktop ? '238px' : '690px'}>
          <div>NFT marketplace UI created with Anima for Figma.</div>
          <div>Join our community</div>
          <Row gap={'10px'}>
            {[DiscordLogo, YoutubedLogo, TwitterLogo, InstagramLogo].map((icon, index) => (
              <CustomLink key={index} icon={icon} to={'/'} />
            ))}
          </Row>
        </Col>
      </Col>
    </>
  )
}

export default memo(FooterMainInfo)
