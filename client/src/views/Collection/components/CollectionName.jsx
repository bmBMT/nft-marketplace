import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import { memo } from 'react'
import Skeleton from 'react-loading-skeleton'

const Loader = () => {
  return (
    <Skeleton height={30} width={200} />
  )
}

const CollectionName = ({ isLoading, title }) => {
  const { isDesktop, isTablet } = useDeviceWidth()

  if (isLoading){
    return <Loader />
  }

  if (isDesktop) {
    return <h1>{title}</h1>
  }
  else if (isTablet) {
    return <h2>{title}</h2>
  }
  else {
    return <h3>{title}</h3>
  }
}

export default memo(CollectionName)