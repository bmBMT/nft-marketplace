import Skeleton from 'react-loading-skeleton'
import Text from './Text/Text.jsx'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import { memo } from 'react'

const ArtistStat = ({ count, text, title, limit = 0, isLoading }) => {
  const { isDesktop } = useDeviceWidth()
  const outText = limit > 0 && count > limit ? `${limit}+` : count + ' ' + (text ?? '')

  if (isLoading) {
    return (
      <div style={{ width: '30%' }}>
        <Skeleton />
        <Skeleton baseColor="#232323" width={100} />
      </div>
    )
  }

  return (
    <div style={{ width: '30%', minWidth: 'fit-content', whiteSpace: 'nowrap' }}>
      {isDesktop ? (
        <h4 style={{ fontFamily: 'Space Mono' }}>{outText}</h4>
      ) : (
        <h5 style={{ fontFamily: 'Space Mono' }}>{outText}</h5>
      )}
      <Text>{title}</Text>
    </div>
  )
}

export default memo(ArtistStat)
