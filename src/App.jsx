import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import DonationCards from './components/donationcards'
import Welcome from './components/welcome'
import Cards from './components/trending'
import Events from './components/events'
import Stoppoverty from './components/stoppoverty'

export default function App() {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <DonationCards />
      <Welcome />
      <Cards />
      <Events />
      <Stoppoverty />
    </div>
  )
}

