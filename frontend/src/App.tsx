import React from 'react'
import { Routes, Route } from 'react-router-dom'

import path from './ultis/path'
import { Home, Login, CreateProfile } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />}></Route>
      <Route path={path.LOGIN} element={<Login title={'Login'} textBtn={'Login'} type={'login'}/>}></Route>
      <Route path={path.REGISTER} element={<Login title={'Sign up'} textBtn={'Sign up with Email'} type={'register'} />} />
      <Route path={path.CREATE_PROFILE} element={<CreateProfile />} />
    </Routes>
  )
}

export default App
