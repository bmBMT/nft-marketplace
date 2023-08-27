import Row from '@/components/Row/Row.jsx'
import Skeleton from 'react-loading-skeleton'

const Loader = () => {
  return (
    <Row gap={12} alignItems='end'>
      <Skeleton
        width={24}
        height={24}
        borderRadius={20}
      />
      <Skeleton width={60} />
    </Row>
  )
}

export default Loader