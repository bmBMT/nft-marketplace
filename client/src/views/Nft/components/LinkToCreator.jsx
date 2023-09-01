import Button from '@/components/Button/Button.jsx'
import Row from '@/components/Row/Row.jsx'
import arrowRight from '@/assets/icons/ArrowRight.svg'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { memo } from 'react'

const Loader = () => {
  return <Skeleton width={267} height={60} borderRadius={20} />
}

const LinkToCreator = ({ isLoading, link }) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <Link to={link}>
      <Button size="secondary" padding={50} filled={false}>
        <Row gap={12}>
          <img src={arrowRight} alt="arrowIcon" />
          <span>Go To Artist Page</span>
        </Row>
      </Button>
    </Link>
  )
}

export default memo(LinkToCreator)