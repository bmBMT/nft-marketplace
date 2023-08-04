import NavigationLink from '@/components/NavigationLink/NavigationLink'
import SignInBtn from '../SignInBtn/SignInBtn'
import SideBar from '@/components/SideBar/SideBar'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '@/main'
import UserInfo from '../AuthorizedMenu/UserInfo'
import { Navigate, useNavigate } from 'react-router-dom'

const MobileNavigationMenu = () => {
  const { UserStore } = useContext(Context)
  const navigate = useNavigate()

  function logout() {
    UserStore.logout()
    navigate('/')
  }

  function goToProfile() {
    navigate(`/artist/${UserStore.user.id}`)
  }

  return (
    <SideBar>
      {UserStore.isAuth ? <UserInfo onClick={goToProfile} /> : <SignInBtn width="100%" />}
      <NavigationLink to={'/marketplace'} width="100%">
        Marketplace
      </NavigationLink>
      <NavigationLink to={'/rankings'} width="100%">
        Rankings
      </NavigationLink>
      {UserStore.isAuth && (
        <>
          <NavigationLink to={'/settings'} width="100%">
            Settings
          </NavigationLink>
          <NavigationLink action={logout} to={'/'} width="100%">
            Logout
          </NavigationLink>
        </>
      )}
    </SideBar>
  )
}

export default observer(MobileNavigationMenu)
