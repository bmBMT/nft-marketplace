import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import { Context } from '@/main.jsx'
import NavigationLink from '@/components/NavigationLink/NavigationLink.jsx'
import AuthorizedMenu from '@/views/Navigation/components/AuthorizedMenu/AuthorizedMenu.jsx'
import SignInBtn from '@/views/Navigation/components/SignInBtn.jsx'
import { observer } from 'mobx-react-lite'
import SideBar from '@/components/SideBar/SideBar.jsx'
import UserInfo from '@/views/Navigation/components/AuthorizedMenu/UserInfo.jsx'
import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const NavigationMenu = () => {
  const { isDesktop } = useDeviceWidth()
  const { UserStore } = useContext(Context)
  const navigate = useNavigate()

  const goToProfile = useCallback(() => {
    navigate(`/artist/${UserStore.user.id}`)
  }, [UserStore]);

  const logout = useCallback(() => {
    UserStore.logout()
  }, []);

  if (isDesktop) {
    return (
      <nav>
        <NavigationLink to='/marketplace'>Marketplace</NavigationLink>
        <NavigationLink to='/rankings'>Rankings</NavigationLink>
        {UserStore.isAuth ? <AuthorizedMenu logout={logout} /> : <SignInBtn />}
      </nav>
    )
  }
  else {
    return (
      <SideBar>
        {UserStore.isAuth ? <UserInfo onClick={goToProfile} /> : <SignInBtn width="100%" />}
        <NavigationLink to='/marketplace' width="100%">
          Marketplace
        </NavigationLink>
        <NavigationLink to='/rankings' width="100%">
          Rankings
        </NavigationLink>
        {UserStore.isAuth && (
          <>
            <NavigationLink to='/settings' width="100%">Settings</NavigationLink>
            <NavigationLink action={logout} to='/' width="100%">Logout</NavigationLink>
          </>
        )}
      </SideBar>
    )
  }
}

export default observer(NavigationMenu)
