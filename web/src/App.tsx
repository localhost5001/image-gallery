import React from 'react'
import { RecoilRoot } from 'recoil'
import logo from './logo.svg'
import './App.css'

import NavBar from 'components/navBar'

function App() {
  return (
    <RecoilRoot>
      <NavBar />
    </RecoilRoot>
  )
}

export default App
