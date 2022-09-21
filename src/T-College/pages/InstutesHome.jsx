import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const InstutesHome = () => {
  return (
    <>
    <Navbar/>
    <div>
      Welcome to T-institutes
      <Link to="../T-bookin-page/pages/Book-Home">T-Booking</Link>
    </div>
    </>
  )
}

export default InstutesHome;
