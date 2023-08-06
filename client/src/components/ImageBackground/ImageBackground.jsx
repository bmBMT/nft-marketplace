import { memo } from 'react'
import styles from './ImageBackground.module.scss'

const ImageBackground = ({ img, height }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(151, 71, 255, 0) 21.88%, #9747ff 95.31%), url(${img})`,
        height,
      }}
      className={styles.placeholder}
    ></div>
  )
}

export default memo(ImageBackground)
