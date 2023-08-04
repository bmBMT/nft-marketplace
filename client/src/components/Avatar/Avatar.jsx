import styles from './Avatar.module.scss'

const Avatar = ({ border = false, radius = 0, width, avatar, ...props }) => {
  const borderLine = border ? '2px solid #2B2B2B' : 'none'

  return (
    <div
      className={styles.avatar}
      style={{
        border: borderLine,
        borderRadius: radius,
        width,
        height: width,
        background: `url(${avatar})`,
        ...props,
      }}
    />
  )
}

export default Avatar
