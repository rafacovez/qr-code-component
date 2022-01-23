import Image from 'next/image'
import React from 'react'
import QRCode from '../images/image-qr-code.png'
import styles from '../styles/Modal.module.css'

export default function Modal() {
  return (
    <div className={styles.Modal}>
      <div className={styles.ImgWrapper}>
        <Image alt="qr-code" src={QRCode} />
      </div>
      <h1 className={styles.ModalHeading}>
        Improve your fron-tend skills by building projects
      </h1>
      <p className={styles.ModalPara}>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  )
}
