import { useContext, useEffect } from 'react'
import { Context } from './main'
import { observer } from 'mobx-react-lite'
import { LocalStorage } from './services'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router/Router'
import NavigationBar from './views/Navigation/NavigationBar/NavigationBar'
import 'react-loading-skeleton/dist/skeleton.css'
import Scrollbars from 'react-custom-scrollbars-2'
import Footer from './views/Footer/Footer'

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
    <Scrollbars autoHide style={{ height: '100vh' }}>
      <BrowserRouter>
        <NavigationBar />
        <Router />
        <Footer/>
      </BrowserRouter>
    </Scrollbars>
  )
}

export default observer(App)
