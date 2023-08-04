import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import NavigationLogo from '../NavigationLogo/NavigationLogo'
import NavigationMenu from '../NvigationMenu/NavigationMenu'

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

export default NavigationBar
