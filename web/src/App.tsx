import React from 'react'
import { RecoilRoot } from 'recoil'
import logo from './logo.svg'
import './App.css'

import NavBar from 'components/navBar'
import PhotoGallery from 'components/photoGallery'

function App() {
  return (
    <RecoilRoot>
      <NavBar />
      <PhotoGallery />
    </RecoilRoot>
  )
}

export default App
