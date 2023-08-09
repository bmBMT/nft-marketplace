import Col from '@/components/Col/Col'
import Row from '@/components/Row/Row'
import Skeleton from 'react-loading-skeleton'

const Tags = ({ tags = [], isLoading }) => {
  return (
    (isLoading || tags.length > 0) && (
      <Col gap={20}>
        {isLoading ? (
          <Skeleton width={135} height={25} />
        ) : (
          <h5 style={{ fontFamily: 'Space Mono', color: '#858584' }}>Tags</h5>
        )}
        <Row gap={20} flexWrap="wrap">
          {isLoading ? (
            <>
              <Skeleton width={150} height={46} borderRadius={20} />
              <Skeleton width={150} height={46} borderRadius={20} />
              <Skeleton width={150} height={46} borderRadius={20} />
              <Skeleton width={150} height={46} borderRadius={20} />
              <Skeleton width={150} height={46} borderRadius={20} />
            </>
          ) : (
            tags.map((tag, i) => (
              <span
                key={i}
                style={{ padding: '12px 30px', borderRadius: 20, backgroundColor: '#3B3B3B' }}
              >
                {tag}
              </span>
            ))
          )}
        </Row>
      </Col>
    )
  )
}

export default Tags
