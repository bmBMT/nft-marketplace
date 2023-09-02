import { memo } from 'react'
import FooterMainInfo from './FooterMainInfo/FooterMainInfo'
import FooterExplorePages from './FooterExplorePages/FooterExplorePages'
import FooterSubscribe from './FooterSubscribe/FooterSubscribe'

const FooterInformation = () => {

  return (
    <>
      <FooterMainInfo/>
      <FooterExplorePages/>
      <FooterSubscribe/>
    </>
  )
}

export default memo(FooterInformation)
