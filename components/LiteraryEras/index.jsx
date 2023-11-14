import { Container, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import localFont from 'next/font/local'
import Link from 'next/link';
import styles from './index.module.scss'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Effra = localFont({
  src: [
    {
      path: '../../fonts/Effra_Md.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_Heavy.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_Rg.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

const LiteraryEras = () => {



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

    < section id='LiteraryEras' className={styles.LiteraryEras} style={...Effra.style}>
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false} className='disable_container'>
        <div className={styles.sec_container}>
          <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
            <div className={styles.sec_title}>
              <Typography variant='h3'>
                العصور الأدبية
              </Typography>
            </div>
          </Container>

          <div className={styles.tags_slider}>
            <Carousel rtl={true} responsive={responsive}
              ssr={true}
              minimumTouchDrag={10}


            >

              <Link href={"/"} className={styles}>
                <Button>
                  كل العصور
                </Button>
              </Link>

              <Link href={"/"} className={styles}>
                <Button>
                  عصر ما قبل الإسلام
                </Button>
              </Link>

              <Link href={"/"} className={styles}>
                <Button>
                  العصر الإسلامي
                </Button>
              </Link>

              <Link href={"/"} className={styles.active}>
                <Button>
                  العصر الأموي
                </Button>
              </Link>

              <Link href={"/"} className={styles}>
                <Button>
                  عصر ما قبل الإسلام
                </Button>
              </Link>

              <Link href={"/"} className={styles}>
                <Button>
                  عصر ما قبل الإسلام
                </Button>
              </Link>

              <Link href={"/"} className={styles}>
                <Button>
                  عصر ما قبل الإسلام
                </Button>
              </Link>

              <Link href={"/"} className={styles}>
                <Button>
                  عصر ما قبل الإسلام
                </Button>
              </Link>
              <Link href={"/"} className={styles}>
                <Button>
                  عصر ما قبل الإسلام
                </Button>
              </Link>
              <Link href={"/"} className={styles}>
                <Button>
                  عصر ما قبل الإسلام
                </Button>
              </Link>
              <Link href={"/"} className={styles}>
                <Button>
                  عصر ما قبل الإسلام
                </Button>
              </Link>
            </Carousel>






          </div>
        </div>
      </Container>
    </section >
  )
}

export default LiteraryEras