import styles from './Avatar.module.scss'
import Skeleton from 'react-loading-skeleton'
import { memo } from 'react'

const Loader = ({ width, radius = 0, style }) => {
  return <Skeleton width={width} height={width} borderRadius={radius} style={style} />
}

const Avatar = ({ border = false, radius = 0, width = 0, avatar, isLoading, ...props }) => {
  const borderLine = border ? '2px solid #2B2B2B' : 'none'

  if (isLoading) {
    return <Loader radius={radius} width={width} style={props.style} />
  }

  return (
    <img
      className={styles.avatar}
      src={avatar}
      style={{
        border: borderLine,
        borderRadius: radius,
        width,
        ...props.style,
      }}
      alt="avatar"
    />
  )
}

export default memo(Avatar)
