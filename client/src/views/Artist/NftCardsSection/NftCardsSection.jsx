import NftCard from '@/components/NftCard/NftCard'
import NftSkeletonCard from '@/components/NftCard/NftSkeletonCard/NftSkeletonCard'
import TabPane from '@/components/Tabs/TabPane/TabPane'
import Tabs from '@/components/Tabs/Tabs'
import { memo } from 'react'

const NftCardsSection = ({ isLoading, nfts, user }) => {
  return (
    <Tabs isLoading={isLoading} backgroundColor="#3b3b3b" topDivider={true}>
      <TabPane title="Created" count={nfts.created.length}>
        {!isLoading ? (
          nfts.created.map((nft) => <NftCard key={nft.id} nft={nft} user={user} />)
        ) : (
          <>
            <NftSkeletonCard />
            <NftSkeletonCard />
            <NftSkeletonCard />
          </>
        )}
      </TabPane>
      <TabPane title="Owned" count={nfts.owned.length}>
        {!isLoading ? (
          nfts.owned.map((nft) => <NftCard key={nft.id} nft={nft} user={user} />)
        ) : (
          <>
            <NftSkeletonCard />
            <NftSkeletonCard />
            <NftSkeletonCard />
          </>
        )}
      </TabPane>
      <TabPane title="Collection" count={nfts.collection.length}>
        {/* TODO FOR AUCTION */}
      </TabPane>
    </Tabs>
  )
}

export default memo(NftCardsSection)
