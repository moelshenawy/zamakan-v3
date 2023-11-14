import React from 'react'
import styles from './index.module.scss'
import { Boxes, Feather, SaveMark, Subtract, Vector } from '../../assets/svgs'
const Footer = () => {
  ;
  return (
    <footer id={styles.footer} style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: '#fff', padding: '10px 0', display: 'flex', justifyContent: 'space-around', borderTop: '0.5px solid #ccc' }}>
      <div className={styles.icon_container}>
        <Subtract />
      </div>


      <div className={styles.icon_container}>
        <Vector />
      </div>


      <div className={styles.icon_container}>
        <Feather />
      </div>

      <div className={styles.icon_container}>
        <SaveMark />
      </div>
      <div className={styles.icon_container}>
        <Boxes />

      </div>
    </footer>
  )
}

export default Footer