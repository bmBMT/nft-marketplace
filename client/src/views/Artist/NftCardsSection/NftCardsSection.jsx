import NftCard from '@/components/NftCard/NftCard'
import NftSkeletonCard from '@/components/NftCard/NftSkeletonCard/NftSkeletonCard'
import TabPane from '@/components/Tabs/TabPane/TabPane'
import Tabs from '@/components/Tabs/Tabs'
import { memo } from 'react'

const NftCardsSection = ({ isLoading, nfts }) => {
  return (
    <Tabs isLoading={isLoading} backgroundColor="#3b3b3b" topDivider={true}>
      <TabPane title="Created" padding={80} count={nfts.created.length}>
        {!isLoading ? (
          nfts.created.map((nft) => <NftCard key={nft.id} nft={nft} backgroundColor="#2b2b2b" />)
        ) : (
          <>
            <NftSkeletonCard />
            <NftSkeletonCard />
            <NftSkeletonCard />
          </>
        )}
      </TabPane>
      <TabPane title="Owned" padding={80} count={nfts.owned.length}>
        {!isLoading ? (
          nfts.owned.map((nft) => <NftCard key={nft.id} nft={nft} backgroundColor="#2b2b2b" />)
        ) : (
          <>
            <NftSkeletonCard />
            <NftSkeletonCard />
            <NftSkeletonCard />
          </>
        )}
      </TabPane>
      <TabPane title="Collection" padding={80} count={nfts.collection.length}>
        {/* TODO FOR AUCTION */}
      </TabPane>
    </Tabs>
  )
}

export default memo(NftCardsSection)
