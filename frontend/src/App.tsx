import React from 'react'
import { Routes, Route } from 'react-router-dom'

import path from './ultis/path'
import { Home, Login } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />}></Route>
      <Route path={path.LOGIN} element={<Login />}></Route>
    </Routes>
  )
}

export default App
