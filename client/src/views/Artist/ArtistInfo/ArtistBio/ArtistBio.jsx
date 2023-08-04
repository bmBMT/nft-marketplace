import Col from '@/components/Col/Col'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import Text from '@/components/Text/Text'
import { memo } from 'react'
import Skeleton from 'react-loading-skeleton'

const ArtistBio = ({ isLoading, bio }) => {
  return (
    isLoading ||
    (bio && (
      <Col gap={10}>
        <SectionTitle>
          {!isLoading ? 'Bio' : <Skeleton baseColor="#232323" width={60} height={28} />}
        </SectionTitle>
        <Text>{!isLoading ? bio : <Skeleton count={5} />}</Text>
      </Col>
    ))
  )
}

export default memo(ArtistBio)
