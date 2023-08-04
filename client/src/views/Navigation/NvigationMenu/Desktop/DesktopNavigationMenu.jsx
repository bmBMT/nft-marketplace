import NavigationLink from '@/components/NavigationLink/NavigationLink'
import SignInBtn from '../SignInBtn/SignInBtn'
import AuthorizedMenu from '../AuthorizedMenu/AuthorizedMenu'
import { useContext } from 'react'
import { Context } from '@/main'
import { observer } from 'mobx-react-lite'

const DesktopNavigationMenu = () => {
  const { UserStore } = useContext(Context)

  return (
    <nav>
      <NavigationLink to={'/marketplace'}>Marketplace</NavigationLink>
      <NavigationLink to={'/rankings'}>Rankings</NavigationLink>
      {UserStore.isAuth ? <AuthorizedMenu /> : <SignInBtn />}
    </nav>
  )
}

export default observer(DesktopNavigationMenu)
