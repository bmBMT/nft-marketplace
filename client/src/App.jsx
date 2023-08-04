import { useContext, useEffect } from 'react'
import { Context } from './main'
import { observer } from 'mobx-react-lite'
import { LocalStorage } from './services'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router/Router'
import NavigationBar from './views/Navigation/NavigationBar/NavigationBar'
import 'react-loading-skeleton/dist/skeleton.css'

const App = () => {
  const { UserStore } = useContext(Context)

  useEffect(() => {
    if (LocalStorage.get('token')) {
      UserStore.setLoading(true)
      UserStore.checkAuth()
    }
  }, [])

  if (UserStore.isLoading) {
    return
  }

  return (
    <BrowserRouter>
      <NavigationBar />
      <Router />
    </BrowserRouter>
  )
}

export default observer(App)
