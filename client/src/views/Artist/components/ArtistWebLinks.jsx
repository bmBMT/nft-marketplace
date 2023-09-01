import Col from '@/components/Col/Col.jsx'
import Row from '@/components/Row/Row.jsx'
import SectionTitle from '@/components/SectionTitle/SectionTitle.jsx'
import CustomLink from '@/components/CustomLink/CustomLink.jsx'
import Skeleton from 'react-loading-skeleton'
import { memo } from 'react'

const Loader = () => {
  return (
    <Col gap={10}>
      <Skeleton height={28} width={80} />
      <Row gap={10}>
        <Skeleton width={32} height={32} />
        <Skeleton width={32} height={32} />
        <Skeleton width={32} height={32} />
        <Skeleton width={32} height={32} />
        <Skeleton width={32} height={32} />
      </Row>
    </Col>
  )
}

const ArtistWebLinks = ({ isLoading, links = {}}) => {
  const isRender = Object.values(links).filter(Boolean).length > 0

  if (isLoading) {
    return <Loader />
  }

  return (
    isRender && (
      <Col gap={10}>
        <SectionTitle>Links</SectionTitle>
        <Row gap={10}>
          <>
            {links.globe && <CustomLink iconSrc="/icons/Globe.svg" to={links.globe} />}
            {links.discord && <CustomLink iconSrc="/icons/DiscordLogo.svg" to={links.discord} />}
            {links.youtube && <CustomLink iconSrc="/icons/YoutubeLogo.svg" to={links.youtube} />}
            {links.twitter && <CustomLink iconSrc="/icons/TwitterLogo.svg" to={links.twitter} />}
            {links.instagram && <CustomLink iconSrc="/icons/InstagramLogo.svg" to={links.instagram} />}
          </>
        </Row>
      </Col>
    )
  )
}

export default memo(ArtistWebLinks)
