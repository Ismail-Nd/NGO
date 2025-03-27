import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import DonationCards from './components/donationcards'
import Welcome from './components/welcome'
import Cards from './components/trending'

export default function App() {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <DonationCards />
      <Welcome />
      <Cards />
    </div>
  )
}

