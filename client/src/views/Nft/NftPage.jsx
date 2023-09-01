import ImageBackground from '@/components/ImageBackground/ImageBackground.jsx'
import { NftService } from '@/services/index.js'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import { useFetching } from '@/utils/hooks/useFetching.js'
import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import NftInfo from './sections/NftInfo.jsx'
import UserService from '@/services/user.service.js'
import MoreNftsFromCreator from './sections/MoreNftsFromCreator.jsx'

const NftPage = () => {
  const { id } = useParams()
  const [nftData, setNftData] = useState({})
  const [creatorNfts, setCreatorNfts] = useState([])
  const { isDesktop, isTablet } = useDeviceWidth()
  const imgHeight = isDesktop ? 600 : isTablet ? 420 : 320

  const [fetchNft, isLoading, error] = useFetching(async (id) => {
    const nftResponse = await NftService.getNft(id)
    const creatorResponse = await UserService.getUser(nftResponse.data.creator.id)
    
    setCreatorNfts(creatorResponse.data.nfts.created)
    setNftData(nftResponse.data)
  })

  useEffect(() => {
    fetchNft(id)
  }, [id])

  if (error) {
    return <Navigate replace to="/" />
  }

  return (
    <main>
      <ImageBackground isLoading={isLoading} height={imgHeight} img={nftData.img} />
      <NftInfo
        isLoading={isLoading}
        nft={nftData}
        creator={nftData?.creator}
        owner={nftData?.owner}
      />
      <MoreNftsFromCreator
        isLoading={isLoading}
        creator={nftData?.creator}
        nfts={creatorNfts}
      />
    </main>
  )
}

export default NftPage
