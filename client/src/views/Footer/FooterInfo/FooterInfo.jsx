import Col from '@/components/Col/Col'
import Row from '@/components/Row/Row'
import NavigationLogo from '@/views/Navigation/NavigationLogo/NavigationLogo'
import FooterIcons from './FooterIcons/FooterIcons'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import InputSubscribe from '@/components/InputSubscribe/InputSubscribe'

const FooterInfo = () => {
  const { isDesktop } = useDeviceWidth()

  const InfoArray = [
    {
      name: <NavigationLogo />,
      text: ['NFT marketplace UI created with Anima for Figma.', 'Join our community'], 
      other: <FooterIcons />,
    },
    {
      name: <h5 style={{ fontFamily: 'Space Mono', color: '#FFFFFF' }}>Explore</h5>,
      text: ['Marketplace', 'Rankings', 'Connect a wallet'],
    },
    {
      name: <h5 style={{ fontFamily: 'Space Mono', color: '#FFFFFF' }}>Join Our Weekly Digest</h5>,
      text: ['Get exclusive promotions & updates straight to your inbox.'],
      inputSub: <InputSubscribe/>,
    },
  ]

  const Info = InfoArray.map((info, index) => (
    <Col key={index} gap={'30px'} width={isDesktop && index===2 ? '420px' : ""}>
      {info.name}
      <Col gap={'20px'} maxWidth={isDesktop && index===2 ? '330px' :  isDesktop ? '238px' : '690px'}>
        {info.text.map((inf, i) => (
          <div key={i}>{inf}</div>
        ))}
        {info.other}
      </Col>
      {info.inputSub}
    </Col>
  ))

  

  return isDesktop ? (
    <Row justifyContent={'space-between'} alignItems={'start'} gap={'20px'}>{Info}</Row>
  ) : (
    <Col gap={'30px'}>{Info}</Col>
  )
}

export default FooterInfo
