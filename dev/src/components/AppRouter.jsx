import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context/context'
import { privateRoutes, publickRoutes } from '../router/routs'
import Loader from './UI/Loader/Loader'

const AppRouter = () => {

  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>
  } 
  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={route.component}
            exact={route.exact}
          />
        )}
        {/* <Route path="/login" element={<Navigate to="/posts" replace />} /> */}
        <Route path="*" element={<Navigate to="/posts" replace />} />
      </Routes>
      :
      <Routes>
        {publickRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={route.component}
            exact={route.exact}
          />
        )}
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

  )
}

export default AppRouter