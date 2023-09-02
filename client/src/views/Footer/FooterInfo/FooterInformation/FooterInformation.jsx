import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import { memo } from 'react'
import FooterNftLogo from './FooterNftLogo/FooterNftLogo'
import FooterExplorePages from './FooterExplorePages/FooterExplorePages'
import FooterSubscribe from './FooterSubscribe/FooterSubscribe'

const FooterInformation = () => {
  const { isDesktop } = useDeviceWidth()

  return (
    <>
      <FooterNftLogo/>
      <FooterExplorePages/>
      <FooterSubscribe/>
    </>
  )
}

export default memo(FooterInformation)
