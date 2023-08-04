import Row from '@/components/Row/Row'
import ArtistStat from '@/components/ArtistStat/ArtistStat'
import { memo } from 'react'

const ArtistStats = ({ isLoading, user }) => {
  return (
    <Row gap={30} flexWrap="wrap">
      <ArtistStat isLoading={isLoading} count={user.sales.value} title="Volume" text='ETH' />
      <ArtistStat isLoading={isLoading} count={user.sales.soldCount} limit={50} title="NFTs Sold" />
      <ArtistStat isLoading={isLoading} count={user.followers} limit={3000} title="Followers" />
    </Row>
  )
}

export default memo(ArtistStats)
