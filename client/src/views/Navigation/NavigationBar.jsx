import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import NavigationLogo from './sections/NavigationLogo.jsx'
import NavigationMenu from './sections/NavigationMenu.jsx'
import { memo } from 'react'

const NavigationBar = () => {
  const { isDesktop, isTablet } = useDeviceWidth()
  const padding = isDesktop ? '20px 50px' : isTablet ? '15px 50px' : '15px 30px'

  return (
    <header style={{ padding }}>
      <NavigationLogo />
      <NavigationMenu />
    </header>
  )
}

export default memo(NavigationBar)
