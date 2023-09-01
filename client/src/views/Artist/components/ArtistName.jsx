import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import { memo } from 'react'
import Skeleton from 'react-loading-skeleton'

const Loader = () => {
  return <Skeleton height={30} width={200} />
}

const ArtistName = ({ isLoading, name }) => {
  const { isDesktop, isTablet } = useDeviceWidth()

  if (isLoading) {
    return <Loader />
  }

  if (isDesktop) {
    return <h2>{name}</h2>
  }
  else if (isTablet) {
    return <h3>{name}</h3>
  }
  else {
    return <h4>{name}</h4>
  }
}

export default memo(ArtistName)
