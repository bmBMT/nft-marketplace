import { Context } from '@/main'
import { privateRoutes, publicRoutes } from '@/routes'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const Router = () => {
  const { UserStore } = useContext(Context)

  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      {UserStore.isAuth &&
        privateRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
      <Route path="*" element={<Navigate replace to={'/'} />} />
    </Routes>
  )
}

export default observer(Router)
