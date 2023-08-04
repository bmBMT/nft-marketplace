import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Toggle from './Toggle/Toggle'
import Menu from './Menu/Menu'
import ScrollLock from 'react-scrolllock'

const SideBar = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuActive(false)
  }, [location])

  function changeMenuVisibility() {
    setIsMenuActive(!isMenuActive)
  }

  function hideMenu() {
    setIsMenuActive(false)
  }

  return (
    <>
      <ScrollLock isActive={isMenuActive} />
      <Toggle callback={changeMenuVisibility} state={isMenuActive} />
      <Menu callback={hideMenu} state={isMenuActive}>
        {children}
      </Menu>
    </>
  )
}

export default SideBar
