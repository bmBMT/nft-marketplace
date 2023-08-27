import { useNavigate, useParams } from 'react-router-dom'
import { useFetching } from '@/utils/hooks/useFetching.js'
import { useEffect, useState } from 'react'
import { CollectionService } from '@/services/index.js'
import Container from '@/components/Container/Container.jsx'
import CollectionInfo from '@/views/Collection/sections/CollectionInfo.jsx'
import TabPane from '@/components/Tabs/TabPane/TabPane'
import NftCard from '@/components/NftCard/NftCard.jsx'
import NftSkeletonCard from '@/components/NftCard/NftSkeletonCard/NftSkeletonCard.jsx'

const CollectionPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [collection, setCollection] = useState({})
    const [nfts, setNfts] = useState([])

    const [fetchCollection, isLoading, error] = useFetching(async (id) => {
        const response = await CollectionService.getCollection(id)

        setCollection(response.data.collection)
        setNfts(response.data.nfts)
    })

    useEffect(() => {
        fetchCollection(id)
    }, [id])

    if (error) {
        navigate("/")
    }

    return (
        <main>
            <Container>
                <CollectionInfo title={collection.name} owner={collection.owner} isLoading={isLoading} />
                <TabPane padding={80}>
                    {
                        isLoading ?
                          <>
                              <NftSkeletonCard />
                              <NftSkeletonCard />
                              <NftSkeletonCard />
                          </>
                          :
                          nfts.map((nft) => <NftCard key={nft.id} nft={nft} backgroundColor="#3B3B3B" />)
                    }
                </TabPane>
            </Container>
        </main>
    )
}

export default CollectionPage