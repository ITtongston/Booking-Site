import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../Assets/css/InstitutesHome.css'
const InstutesHome = () => {
  return (
    <>
    <Navbar/>
    <div className='InstituteMain'>
      Welcome to T-institutes
      <span><Link to="/T-bookin-page/pages/Book-Home">Go to T-Booking</Link></span>
    </div>
    </>
  )
}

export default InstutesHome;
