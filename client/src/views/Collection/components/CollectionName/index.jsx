import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import { memo } from 'react'
import Loader from './loader.jsx'

const Index = ({ isLoading, title }) => {
  const { isDesktop, isTablet } = useDeviceWidth()

  if (isLoading){
    return <Loader />
  }

  return (
    isDesktop ? (
      <h1>{title}</h1>
    ) : isTablet ? (
      <h2>{title}</h2>
    ) : (
      <h3>{title}</h3>
    )
  )
}

export default memo(Index)