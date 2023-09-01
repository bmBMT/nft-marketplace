import NftCard from '@/views/Nft/components/NftCard/NftCard.jsx'
import TabPane from '@/components/Tabs/TabPane/TabPane.jsx'
import Tabs from '@/components/Tabs/Tabs.jsx'
import { memo } from 'react'
import CollectionCard from '@/views/Collection/components/CollectionCard.jsx'
import CardsList from '@/components/CardsList.jsx'

const NftCardsSection = ({ isLoading, nfts = {}, collections = [] }) => {
  const nftsCreated = nfts.created ?? [];
  const nftsOwned = nfts.owned ?? [];

  return (
    <Tabs isLoading={isLoading} backgroundColor="#3b3b3b" topDivider={true}>
      <TabPane title="Created" padding={80} count={nftsCreated.length}>
        <CardsList isLoading={isLoading} list={nftsCreated} Component={NftCard} backgroundColor="#2b2b2b" />
      </TabPane>
      <TabPane title="Owned" padding={80} count={nftsOwned.length}>
        <CardsList isLoading={isLoading} list={nftsOwned} Component={NftCard} backgroundColor="#2b2b2b" />
      </TabPane>
      <TabPane title="Collection" padding={80} count={collections.length}>
        <CardsList isLoading={isLoading} list={collections} Component={CollectionCard} />
      </TabPane>
    </Tabs>
  )
}

export default memo(NftCardsSection)
