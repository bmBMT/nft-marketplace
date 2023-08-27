import styles from './Avatar.module.scss'
import Skeleton from 'react-loading-skeleton'

const Avatar = ({ border = false, radius = 0, width = 0, avatar, isLoading, ...props }) => {
  const borderLine = border ? '2px solid #2B2B2B' : 'none'

  return (
    isLoading ?
     <Skeleton
      width={width}
      height={width}
      borderRadius={radius}
     />  :
    <img
      className={styles.avatar}
      src={avatar}
      style={{
        border: borderLine,
        borderRadius: radius,
        width,
        ...props,
      }}
      alt="avatar"
    />
  )
}

export default Avatar
