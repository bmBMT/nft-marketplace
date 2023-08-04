import Skeleton from 'react-loading-skeleton'
import Text from '../Text/Text'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import { memo } from 'react'

const ArtistStat = ({ count, text, title, limit = 0, isLoading }) => {
  const { isDesktop } = useDeviceWidth()

  return (
    <div style={{ width: '30%', minWidth: 'fit-content', whiteSpace: 'nowrap' }}>
      {isDesktop ? (
        <h4 style={{ fontFamily: 'Space Mono' }}>
          {!isLoading ? (
            limit > 0 && count > limit ? (
              `${limit}+`
            ) : (
              count + ' ' + (text ?? '')
            )
          ) : (
            <Skeleton />
          )}
        </h4>
      ) : (
        <h5 style={{ fontFamily: 'Space Mono' }}>
          {!isLoading ? (
            limit > 0 && count > limit ? (
              `${limit}+`
            ) : (
              count + ' ' + (text ?? '')
            )
          ) : (
            <Skeleton />
          )}
        </h5>
      )}
      <Text>{!isLoading ? title : <Skeleton baseColor="#232323" width={100} />}</Text>
    </div>
  )
}

export default memo(ArtistStat)
