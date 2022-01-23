import Image from 'next/image'
import React from 'react'
import QRCode from '../images/image-qr-code.png'

export default function Modal() {
  return (
    <div>
      <div>
        <Image alt="qr-code" src={QRCode} />
      </div>
      <h1>Improve your fron-tend skills by building projects</h1>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  )
}
