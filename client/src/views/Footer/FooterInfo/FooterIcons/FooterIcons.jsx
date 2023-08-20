import DiscordLogo from '@/assets/icons/DiscordLogo.svg'
import YoutubedLogo from '@/assets/icons/YoutubeLogo.svg'
import TwitterLogo from '@/assets/icons/TwitterLogo.svg'
import InstagramLogo from '@/assets/icons/InstagramLogo.svg'
import Row from '@/components/Row/Row'
import CustomLink from '@/components/CustomLink/CustomLink'

const FooterIcons = () => {
  const Icons = [DiscordLogo, YoutubedLogo, TwitterLogo, InstagramLogo].map((icon, index) => (
    <CustomLink key={index} icon={icon} to={'/'} />
  ))

  return <Row gap={'10px'}>{Icons}</Row>
}

export default FooterIcons
