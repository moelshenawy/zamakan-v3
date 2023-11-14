import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgs from '../../assets/constants/imgs'
import { Typography } from '@mui/material';
import styles from './index.module.scss'
const SelectMap = ({ cityNames, activeIndex }) => {
  const textContents = Array.from(cityNames).map((city) => city.textContent);
  const { smallMap } = imgs

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5.5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5.5
    },
    smallScreens: {
      breakpoint: { max: 1260, min: 1024 },
      items: 3.5

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 360 },
      items: 3
    },
    smallMobile: {
      breakpoint: { max: 360, min: 250 },
      items: 2.1
    },
    smallMobile2: {
      breakpoint: { max: 250, min: 0 },
      items: 1,
    }
  };

  return (
    <>

    </>
  )
}

export default SelectMap