import Skeleton from 'react-loading-skeleton'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import { memo } from 'react'

const Loader = () => {
  return <Skeleton height={34} width={300} />
}

const AnotherNftsTitle = ({ isLoading }) => {
  if (isLoading) {
    return <Loader />
  }

  const { isDesktop } = useDeviceWidth()

  if (isDesktop) {
    return <h3>More from this creator</h3>
  }
  else {
    return <h4>More from this creator</h4>
  }
}

export default memo(AnotherNftsTitle)