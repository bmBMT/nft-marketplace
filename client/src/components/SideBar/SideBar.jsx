import { memo, useCallback, useEffect, useState } from 'react'
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

  const changeMenuVisibility = useCallback(() => {
    setIsMenuActive(prevState => !prevState)
  }, [])

  const hideMenu = useCallback(() => {
    setIsMenuActive(false)
  }, []);

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

export default memo(SideBar)
