import ImageBackground from '@/components/ImageBackground/ImageBackground'
import { NftService } from '@/services'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import { useFetching } from '@/utils/hooks/useFetching'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Navigate, useParams } from 'react-router-dom'
import NftInfo from '../NftInfo/NftInfo'
import UserService from '@/services/user/user.service'
import MoreNftsFromCreator from '../MoreNftsFromCreator/MoreNftsFromCreator'

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
      {!isLoading ? (
        <ImageBackground height={imgHeight} img={nftData.img} />
      ) : (
        <Skeleton baseColor="#232323" height={imgHeight} />
      )}
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
