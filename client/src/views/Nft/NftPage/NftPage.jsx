import ImageBackground from '@/components/ImageBackground/ImageBackground'
import { NftService } from '@/services'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import { useFetching } from '@/utils/hooks/useFetching'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useParams } from 'react-router-dom'
import NftInfo from '../NftInfo/NftInfo'
import UserService from '@/services/user/user.service'

const NftPage = () => {
  const { id } = useParams()
  const [nftData, setNftData] = useState({})
  const [creatorData, setCreatorData] = useState({})
  const [ownerData, setOwnerData] = useState({})
  const { isDesktop, isTablet } = useDeviceWidth()
  const imgHeight = isDesktop ? 600 : isTablet ? 420 : 320

  const [fetchNft, isLoading, error] = useFetching(async (id) => {
    const nftResponse = await NftService.getNft(id)
    const creatorResponse = await UserService.getUser(nftResponse.data.createdBy)
    if (nftResponse.data.createdBy !== nftResponse.data.owner) {
      const ownerResponse = await UserService.getUser(nftResponse.data.owner)
      setOwnerData(ownerResponse.data)
    } else {
      setOwnerData(creatorResponse.data)
    }
    setNftData(nftResponse.data)
    setCreatorData(creatorResponse.data)
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
        creator={creatorData.user}
        owner={ownerData.user}
      />
    </main>
  )
}

export default NftPage
