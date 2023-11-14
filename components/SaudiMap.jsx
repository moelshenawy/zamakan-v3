import React, { useEffect, useState, useRef } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import imgs from '../assets/constants/imgs';
import { Typography } from '@mui/material';
import Svg from './SVGParts/Svg';
import { useRouter } from 'next/router';
import SelectPage from './SelectPage';
import SelectMap from './SelectMap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SaudiMap = () => {
  const { smallMap, } = imgs;

  const router = useRouter();


  const containerRef = useRef(null);
  const handleClick = () => {
    // Navigate to the specified route
    router.push('/city');
  };



  useEffect(() => {
    const elements = document.querySelectorAll('.city-name');
    const container = containerRef.current;

    elements.forEach((element) => {
      element.addEventListener('click', () => {
        handleClick();
      });
    });

    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         // Add the "animate" class to the elements when the container is in the viewport
    //         elements.forEach((element) => {
    //           element.classList.add('animate');
    //         });
    //       } else {
    //         // Remove the "animate" class from the elements when the container is out of the viewport
    //         elements.forEach((element) => {
    //           element.classList.remove('animate');
    //         });
    //       }
    //     });
    //   },
    //   {
    //     threshold: 0.5, // Trigger animation when 50% of the container is in the viewport
    //   }
    // );

    // // Observe the container
    // observer.observe(container);

    // return () => {
    // Cleanup when the component unmounts
    // observer.disconnect();
    // };
  }, []);


  // SVG ZOOM
  const [landElments, setLandElemnts] = useState([])
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLand, setActiveLand] = useState(null);

  const [isPointsActive, seIsPointsActive] = useState(false);

  const [cityNames, setCityNames] = useState([]);
  useEffect(() => {
    // Select all elements with the class name .land
    const elements = document.querySelectorAll('.land');
    const city = document.querySelectorAll('.city-name');
    setCityNames(city)
    setLandElemnts(elements)

    // Add dynamic IDs to the selected elements
    elements.forEach((element, index) => {
      element.setAttribute('id', `land-${index}`);
    });
  }, []);


  const transformComponentRef = useRef(null);
  const handleZoomToLand = (landIndex) => {

    const elementId = `land-${landIndex}`;
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement(elementId);
    }
    setActiveIndex(landIndex); // Set the active index
    seIsPointsActive(false)
  };

  useEffect(() => {
    const dataIndex = document.querySelectorAll(`#land-${activeIndex}`)[0];
    const elementsWithLandClassOnly = document.querySelectorAll('.land:not(.activeLand)');

    if (activeLand) {
      activeLand.classList.remove('activeLand');
      seIsPointsActive(false)


    }

    if (dataIndex) {
      setActiveLand(dataIndex);
      dataIndex.classList.add('activeLand');
      seIsPointsActive(true)
    }

    if (isPointsActive === true) {
      elementsWithLandClassOnly.forEach((element) => {
        element.classList.add('hiddenPoints');
      });
    } else {
      elementsWithLandClassOnly.forEach((element) => {
        element.classList.remove('hiddenPoints');
      });

    }

  }, [activeIndex, activeLand])

  const textContents = Array.from(cityNames).map((city) => city.textContent);

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
      items: 3.5
    },
    smallMobile: {
      breakpoint: { max: 360, min: 250 },
      items: 4
    },
    smallMobile2: {
      breakpoint: { max: 250, min: 0 },
      items: 3,
    }
  };


  return (
    <>

      <div id='map-boxes'>




        <TransformWrapper
          ref={transformComponentRef}
          wheel={{ wheelDisabled: true }}
          initialPositionX={0}
          initialPositionY={0}
          pan={{ disabled: false }}
          zoomIn={{ step: 100 }}
          zoomOut={{ step: 100 }}

          minScale={0.5}
          maxScale={2}
          initialScale={1}

          doubleClick={{ disabled: false, mode: "reset" }}
          wrapperStyle={{ maxWidth: "100%", maxHeight: "calc(100vh - 50px)" }}

        >


          {({ zoomIn, zoomOut, resetTransform }) => (

            <>
              <div className="tools">
                <button onClick={() => zoomIn()}>+</button>
                <button onClick={() => zoomOut()}>-</button>
                <button onClick={() => {
                  resetTransform();
                  setActiveIndex(null);
                  setActiveLand(null);
                  seIsPointsActive(false);

                  landElments.forEach((element) => {
                    element.classList.remove('activeLand', 'hiddenPoints');
                  });

                }}>Reset</button>

                <div className={`select-box ${activeIndex === null ? 'active' : ''}`} onClick={() => {

                  resetTransform();
                  setActiveIndex(null);
                  setActiveLand(null);
                  seIsPointsActive(false);

                  landElments.forEach((element) => {
                    element.classList.remove('activeLand', 'hiddenPoints');
                  });
                }}>
                  <div className={"img_container"}>
                    <img src={smallMap.src} alt="الرياض" />
                  </div>
                  <div className={"name"}>
                    <Typography>المملكة</Typography>
                  </div>
                </div>


                {Array.from({ length: landElments.length }).map((_, index) => (
                  <div className={`select-box ${index === activeIndex ? 'active' : ''}`} key={index} onClick={() => handleZoomToLand(index)}>
                    <div className={"img_container"}>
                      <img src={smallMap.src} alt="الرياض" />
                    </div>
                    <div className={"name"}>
                      <Typography>الرياض Zoom to Land {index + 1}</Typography>
                    </div>
                  </div>

                ))}





              </div>
              {landElments?.length > 0 && (
                <div className="slider-container">
                  <Carousel
                    rtl={true}
                    responsive={responsive}
                    minimumTouchDrag={10}
                    arrows={false}
                    ssr={true}

                    draggable
                    additionalTransfrom={0}
                    centerMode={false}
                    focusOnSelect={false}
                    keyBoardControl
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                  >
                    <div className={`slider ${activeIndex === null ? 'active' : ''}`} onClick={() => {
                      resetTransform();
                      setActiveIndex(null);
                      setActiveLand(null);
                      seIsPointsActive(false);

                      landElments.forEach((element) => {
                        element.classList.remove('activeLand', 'hiddenPoints');
                      });
                    }} >

                      <div className={"name"}>
                        <Typography>المملكة</Typography>
                      </div>
                    </div>
                    {Array.from({ length: landElments.length }).map((_, index) => (

                      <>
                        <div className={`slider ${index === activeIndex ? 'active' : ''}`} key={index} onClick={() => handleZoomToLand(index)}>
                          <div className={"name"}>
                            <Typography>Land - {index + 1}</Typography>
                          </div>
                        </div>

                      </>
                    ))}
                  </Carousel>
                </div>
              )}
              <TransformComponent>
                <Svg />
              </TransformComponent>
            </>
          )
          }
        </TransformWrapper >



      </div >

    </>


  )
}

export default SaudiMap