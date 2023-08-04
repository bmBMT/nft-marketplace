import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import Skeleton from 'react-loading-skeleton'
import styles from '../NftCard.module.scss'

const NftSkeletonCard = ({ isAuction = false }) => {
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
      <Skeleton style={{ position: 'absolute', left: 60, bottom: 95.58 }} width={80} />
      <Skeleton
        style={{ position: 'absolute', left: 24, bottom: 92.58 }}
        width={24}
        height={24}
        borderRadius={20}
      />
      <Skeleton style={{ position: 'absolute', left: 24, bottom: 48 }} width={40} />
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

export default NftSkeletonCard
