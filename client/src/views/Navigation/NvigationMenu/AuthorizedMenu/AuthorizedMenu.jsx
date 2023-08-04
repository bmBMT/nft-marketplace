import DropDownMenu from '@/components/DropDownMenu/DropDownMenu'
import UserInfo from './UserInfo'
import { useContext, useState } from 'react'
import { Context } from '@/main'
import userIcon from '@/assets/icons/User.svg'
import settingsIcon from '@/assets/icons/Settings.svg'
import logoutIcon from '@/assets/icons/Logout.svg'

const AuthorizedMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { UserStore } = useContext(Context)

  function changeVisible() {
    setIsOpen(!isOpen)
  }

  function logout() {
    UserStore.logout()
  }

  const toggle = <UserInfo onClick={changeVisible} />

  const links = [
    { to: `/artist/${UserStore.user.id}`, img: userIcon, title: 'Profile' },
    { to: '/settings', img: settingsIcon, title: 'Settings' },
    { to: '/', img: logoutIcon, title: 'Logout', action: logout },
  ]

  return <DropDownMenu toggle={toggle} setIsOpen={setIsOpen} isOpen={isOpen} links={links} />
}

export default AuthorizedMenu
