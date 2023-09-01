import Col from '@/components/Col/Col.jsx'
import SectionTitle from '@/components/SectionTitle/SectionTitle.jsx'
import Text from '@/components/Text/Text.jsx'
import { memo } from 'react'
import Skeleton from 'react-loading-skeleton'

const Loader = () => {
  return (
    <Col gap={10}>
      <Skeleton baseColor="#232323" width={100} height={20} />
      <Skeleton count={5} />
    </Col>
  )
}

const ArtistBio = ({ isLoading, bio }) => {
  if (isLoading){
    return <Loader />
  }

  return (
      bio && (
        <Col gap={10}>
          <SectionTitle>Bio</SectionTitle>
          <Text>{bio}</Text>
        </Col>
      )
  )
}

export default memo(ArtistBio)
