import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import DesktopMenu from './Desktop/DesktopNavigationMenu'
import MobileMenu from './Mobile/MobileNavigationMenu'

const NavigationMenu = () => {
  const { isDesktop } = useDeviceWidth()

  return isDesktop ? <DesktopMenu /> : <MobileMenu />
}

export default NavigationMenu
