import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  const date = new Date()
  const currentYear = date.getFullYear()
  const Emoji = (props) => {
    return (
      <span
        className={styles.FooterEmoji}
        role="img"
        aria-label={props.label ? props.label : ''}
        aria-hidden={props.label ? 'false' : 'true'}
      >
        {props.symbol}
      </span>
    )
  }
  return (
    <footer className={styles.Footer}>
      <p className={styles.FooterText}>
        Coded with <Emoji symbol="❤️" label="heart" /> by
      </p>
      <Link href="https://twitter.com/rafdidact">
        <a className={styles.FooterLink}>@rafdidact</a>
      </Link>
    </footer>
  )
}
