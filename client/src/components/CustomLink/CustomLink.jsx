import { memo } from 'react'
import styles from './CustomLink.module.scss'

const CustomLink = ({ children, icon, iconSrc = '', to }) => {
  return (
    <a href={to} className={styles.link}>
      <img src={icon || iconSrc} alt="" />
      {children}
    </a>
  )
}

export default memo(CustomLink)
