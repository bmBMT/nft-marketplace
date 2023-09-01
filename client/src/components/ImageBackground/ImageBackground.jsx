import { memo } from 'react'
import styles from './ImageBackground.module.scss'
import Skeleton from 'react-loading-skeleton'

const Loader = ({ height }) => {
  return <Skeleton baseColor="#232323" height={height} />
}

const ImageBackground = ({ img, height, gradient = false, radius = 0, isLoading }) => {
  if (isLoading){
    return <Loader height={height} />
  }

  return (
    <div
      style={{
        backgroundImage: gradient
          ? `linear-gradient(180deg, rgba(151, 71, 255, 0) 21.88%, #9747ff 95.31%), url(${img})`
          : `url(${img})`,
        height,
        borderRadius: radius
      }}
      className={styles.placeholder}
    ></div>
  )
}

export default memo(ImageBackground)
