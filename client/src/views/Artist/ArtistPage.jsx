import { useParams, useNavigate } from 'react-router-dom'
import ProfileImage from './sections/ProfileImage.jsx'
import ArtistInfo from './sections/ArtistInfo.jsx'
import { useCallback, useContext, useEffect, useState } from 'react'
import UserService from '@/services/user.service.js'
import { Context } from '@/main.jsx'
import { useFetching } from '@/utils/hooks/useFetching.js'
import NftCardsSection from './sections/NftCardsSection.jsx'

const ArtistPage = () => {
  const { id } = useParams()
  const [userData, setUserData] = useState({})
  const [userNfts, setUserNfts] = useState({})
  const { UserStore } = useContext(Context)
  const [isFollowed, setIsFollowed] = useState(UserStore?.user?.following?.includes(id))
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const navigate = useNavigate()

  const [fetchUser, isLoading, error] = useFetching(async (id) => {
    const response = await UserService.getUser(id)
    setUserData(response.data.user)
    setUserNfts(response.data.nfts)
  })

  useEffect(() => {
    fetchUser(id)
  }, [id])

  const follow = useCallback(async () => {
    if (isButtonDisabled) {
      return
    }
    setIsButtonDisabled(true)

    const error = await UserStore.followUser(id)
    if (!error) {
      setIsFollowed(true)
      setUserData((prev) => ({ ...prev, followers: prev.followers + 1 }))
    }

    setIsButtonDisabled(false)
  }, [id])

  const unfollow = useCallback(async () => {
    if (isButtonDisabled) {
      return
    }
    setIsButtonDisabled(true)

    const error = await UserStore.unfollowUser(id)
    if (!error) {
      setIsFollowed(false)
      setUserData((prev) => ({ ...prev, followers: prev.followers - 1 }))
    }

    setIsButtonDisabled(false)
  }, [id])

  if (error) {
    navigate('/')
  }

  return (
      <main>
        <ProfileImage
          isLoading={isLoading}
          avatar={userData.avatar}
          placeholder={userData.placeholder}
        />
        <ArtistInfo
          isButtonDisabled={isButtonDisabled}
          isLoading={isLoading}
          user={userData}
          follow={follow}
          unfollow={unfollow}
          isFollowed={isFollowed}
        />
        <NftCardsSection isLoading={isLoading} nfts={userNfts} />
      </main>
  )
}

export default ArtistPage
