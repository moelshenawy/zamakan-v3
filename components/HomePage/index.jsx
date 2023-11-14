import React from 'react'
import styles from './index.module.scss'
import Navbar from '../Navbar'
import Footer from '../Footer'
import SaudiMap from '../SaudiMap'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <SaudiMap />
      <Footer />
    </>
  )
}

export default HomePage