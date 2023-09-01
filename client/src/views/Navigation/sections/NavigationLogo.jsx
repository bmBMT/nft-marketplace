import logoImg from '@/assets/icons/Logo.svg'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import { Link } from 'react-router-dom'
import { memo } from 'react'

const NavigationLogo = () => {
  const { isPhone } = useDeviceWidth()
  const height = isPhone ? 24 : '';

  return (
    <Link to={'/'}>
      <img style={{ height }} src={logoImg} alt="" />
    </Link>
  )
}

export default memo(NavigationLogo)
