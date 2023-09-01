import { Link } from 'react-router-dom'
import styles from './NftCard.module.scss'
import UserCardInfo from '@/components/UserCardInfo/UserCardInfo.jsx'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import Skeleton from 'react-loading-skeleton'
import { memo } from 'react'

const Loader = ({ isAuction = false }) => {
  const { isPhone } = useDeviceWidth()

  const height = isPhone ? 406 : 463.38

  return (
    <div className={styles.card} style={{ cursor: 'default', maxHeight: height }}>
      <Skeleton className={styles.image} />
      <Skeleton baseColor="#232323" height={168.38} style={{ lineHeight: 'unset' }} />
      <Skeleton
        style={{ position: 'absolute', left: 24, bottom: 120.58 }}
        width={159}
        height={22}
      />
      <Skeleton style={{ position: 'absolute', left: 24, bottom: 91.58 }} width={24} height={24} borderRadius={20} />
      <Skeleton style={{ position: 'absolute', left: 60, bottom: 95.58 }} width={80} />
      <Skeleton style={{ position: 'absolute', left: 24, bottom: 24 }} width={80} />
      {isAuction && (
        <>
          <Skeleton style={{ position: 'absolute', right: 65, bottom: 48 }} width={40} />
          <Skeleton style={{ position: 'absolute', right: 24, bottom: 24 }} width={80} />
        </>
      )}
    </div>
  )
}

const NftCard = ({ data, backgroundColor, loader = false }) => {
  if (loader) {
    return <Loader />
  }

  const categoryClassNames = {
    art: styles.staticImg,
  }

  return (
    <Link to={`/nft/${data.id}`} className={`${styles.card} ${categoryClassNames[data.category]}`} style={{ backgroundColor }}>
      <div className={styles.imgContainer}>
        <div className={styles.image} style={{ backgroundImage: `url(${data.img})` }} />
      </div>
      <div className={styles.info}>
        <div className={styles.nftInfo}>
          <h5>{data.name}</h5>
          <UserCardInfo user={data.owner} />
        </div>
        <div className={styles.additionalInfo}>
          <section className={styles.additional}>
            <label>Price</label>
            <span>{data.price} ETH</span>
          </section>
          {/* TODO FOR AUCTION */}
          {/* <div className={styles.additional}>
            <label>Highest Bid</label>
            <span></span>
          </div> */}
        </div>
      </div>
    </Link>
  )
}

export default memo(NftCard)
