import { memo } from 'react'
import styles from './ImageBackground.module.scss'

const ImageBackground = ({ img, height }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})`, height }}
      className={styles.placeholder}
    ></div>
  )
}

export default memo(ImageBackground)
