import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import { memo } from 'react'
import Skeleton from 'react-loading-skeleton'

const ArtistName = ({ isLoading, name }) => {
  const { isDesktop, isTablet } = useDeviceWidth()

  return isDesktop ? (
    <h2>{!isLoading ? name : <Skeleton height={30} width={200} />}</h2>
  ) : isTablet ? (
    <h3>{!isLoading ? name : <Skeleton height={30} width={200} />}</h3>
  ) : (
    <h4>{!isLoading ? name : <Skeleton height={30} width={200} />}</h4>
  )
}

export default memo(ArtistName)
