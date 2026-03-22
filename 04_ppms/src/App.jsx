import { useState } from 'react'
import './App.css'
import { Navbar } from './components/01_navbar/Navbar'
import { Hero } from './components/02_home/01_hero/Hero'
import { Service } from './components/02_home/02_services/service'

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
    </>
  )
}


