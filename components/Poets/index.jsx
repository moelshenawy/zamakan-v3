import { Container, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import localFont from 'next/font/local'
// import Carousel from 'react-elastic-carousel';
import styles from './index.module.scss'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import imgs from '../../assets/constants/imgs';

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

const Poets = () => {
  const { ra3y } = imgs;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4.5,
      arrows: false
    },
    mobile: {
      breakpoint: { max: 464, min: 360 },
      items: 4.5
    },
    smallMobile: {
      breakpoint: { max: 360, min: 0 },
      items: 3
    }
  };






  return (
    < section id='Poets' className={styles.Poets} style={...Effra.style}>
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false} className='disable_container'>
        <div className={styles.sec_container}>
          <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
            <div className={styles.sec_title}>
              <Typography variant='h3'>
                شعراء العصر الأموي
              </Typography>
            </div>
          </Container>

          <div className={styles.tags_slider} id='carosuel'>
            <Carousel
              draggable
              responsive={responsive}
              rtl={true}

              ssr={true}
              minimumTouchDrag={20}

              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              focusOnSelect={false}
              keyBoardControl
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
            >


              <div href={"/"} className={styles.box_container}>


                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="ra3y" />
                  </div>

                  <div className={styles.name}>
                    <Typography>الأعشى</Typography>
                  </div>
                </div>
              </div>

              <div href={"/"} className={styles.box_container}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="ra3y" />
                  </div>

                  <div className={styles.name}>
                    <Typography>الراعي</Typography>
                  </div>
                </div>
              </div>

              <div href={"/"} className={styles.box_container}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="ra3y" />
                  </div>

                  <div className={styles.name}>
                    <Typography>الطرماح بن حكيم</Typography>
                  </div>
                </div>
              </div>

              <div href={"/"} className={styles.box_container}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="ra3y" />
                  </div>

                  <div className={styles.name}>
                    <Typography>الفرزدق</Typography>
                  </div>
                </div>
              </div>

              <div href={"/"} className={styles.box_container}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="ra3y" />
                  </div>

                  <div className={styles.name}>
                    <Typography>الكميت بن زيد</Typography>
                  </div>
                </div>
              </div>

              <div href={"/"} className={styles.box_container}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="ra3y" />
                  </div>

                  <div className={styles.name}>
                    <Typography>جرير</Typography>
                  </div>
                </div>
              </div>


              <div href={"/"} className={styles.box_container}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="ra3y" />
                  </div>

                  <div className={styles.name}>
                    <Typography>جرير</Typography>
                  </div>
                </div>
              </div>

              <div href={"/"} className={styles.box_container}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="ra3y" />
                  </div>

                  <div className={styles.name}>
                    <Typography>جرير</Typography>
                  </div>
                </div>
              </div>

              <div href={"/"} className={styles.box_container}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="ra3y" />
                  </div>

                  <div className={styles.name}>
                    <Typography>جرير</Typography>
                  </div>
                </div>
              </div>

              <div href={"/"} className={styles.box_container}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="ra3y" />
                  </div>

                  <div className={styles.name}>
                    <Typography>جرير</Typography>
                  </div>
                </div>
              </div>

              <div href={"/"} className={styles.box_container}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="ra3y" />
                  </div>

                  <div className={styles.name}>
                    <Typography>جرير</Typography>
                  </div>
                </div>
              </div>

              <div href={"/"} className={styles.box_container}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="ra3y" />
                  </div>

                  <div className={styles.name}>
                    <Typography>جرير</Typography>
                  </div>
                </div>
              </div>

              <div href={"/"} className={styles.box_container}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="ra3y" />
                  </div>

                  <div className={styles.name}>
                    <Typography>جرير</Typography>
                  </div>
                </div>
              </div>

              <div href={"/"} className={styles.box_container}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="ra3y" />
                  </div>

                  <div className={styles.name}>
                    <Typography>الطرماح بن حكيم</Typography>
                  </div>
                </div>
              </div>
              <div href={"/"} className={styles.box_container}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="ra3y" />
                  </div>

                  <div className={styles.name}>
                    <Typography>جميل بن معمر</Typography>
                  </div>
                </div>
              </div>

              <div href={"/"} className={styles.box_container}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={ra3y.src} alt="ra3y" />
                  </div>

                  <div className={styles.name}>
                    <Typography>عمر بن أبي ربيعة</Typography>
                  </div>
                </div>
              </div>


            </Carousel>



          </div>
        </div>
      </Container>
    </section >
  )
}

export default Poets