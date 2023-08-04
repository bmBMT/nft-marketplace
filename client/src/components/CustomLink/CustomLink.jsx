import { memo } from 'react'
import styles from './CustomLink.module.scss'

const CustomLink = ({ children, icon, to }) => {
  return (
    <a href={to} className={styles.link}>
      <img src={icon} alt="" />
      {children}
    </a>
  )
}

export default memo(CustomLink)
