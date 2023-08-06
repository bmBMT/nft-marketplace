import Avatar from '@/components/Avatar/Avatar'
import Col from '@/components/Col/Col'
import Row from '@/components/Row/Row'
import Skeleton from 'react-loading-skeleton'

const CreatedBy = ({ isLoading, artistAvatar, artistName }) => {
  return (
    <Col gap={10}>
      {isLoading ? (
        <Skeleton width={135} height={25} />
      ) : (
        <h5 style={{ fontFamily: 'Space Mono', color: '#858584' }}>Created By</h5>
      )}
      <Row gap={12}>
        {isLoading ? <Skeleton width={24} height={24} borderRadius={120} /> : <Avatar avatar={artistAvatar} width={24} radius={120} />}
        {isLoading ? <Skeleton width={110} height={25} /> : <h5>{artistName}</h5>}
      </Row>
    </Col>
  )
}

export default CreatedBy
