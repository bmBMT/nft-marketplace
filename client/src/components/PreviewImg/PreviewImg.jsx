import styles from './PreviewImg.module.scss'

const PreviewImg = ({ width, height, img, ...props }) => {
  return (
    <div
      {...props}
      style={{ width, height, background: img ? `url(${img})` : '#858584', ...props.style }}
      className={styles.preview}
    />
  )
}

export default PreviewImg
