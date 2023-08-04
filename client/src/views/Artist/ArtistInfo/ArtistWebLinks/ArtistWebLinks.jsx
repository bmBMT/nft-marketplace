import Col from '@/components/Col/Col'
import Row from '@/components/Row/Row'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import globeIcon from '@/assets/icons/Globe.svg'
import discordIcon from '@/assets/icons/DiscordLogo.svg'
import youtubeIcon from '@/assets/icons/YoutubeLogo.svg'
import twitterIcon from '@/assets/icons/TwitterLogo.svg'
import instagramIcon from '@/assets/icons/InstagramLogo.svg'
import CustomLink from '@/components/CustomLink/CustomLink'
import Skeleton from 'react-loading-skeleton'
import { memo } from 'react'

const ArtistWebLinks = ({ isRender, isLoading, links }) => {
  return (
    (isRender || isLoading) && (
      <Col gap={10}>
        <SectionTitle>{!isLoading ? 'Links' : <Skeleton height={28} width={80} />}</SectionTitle>
        <Row gap={10}>
          {!isLoading ? (
            <>
              {links.globe && <CustomLink icon={globeIcon} to={links.globe} />}
              {links.discord && <CustomLink icon={discordIcon} to={links.discord} />}
              {links.youtube && <CustomLink icon={youtubeIcon} to={links.youtube} />}
              {links.twitter && <CustomLink icon={twitterIcon} to={links.twitter} />}
              {links.instagram && <CustomLink icon={instagramIcon} to={links.instagram} />}
            </>
          ) : (
            <>
              <Skeleton width={32} height={32} />
              <Skeleton width={32} height={32} />
              <Skeleton width={32} height={32} />
              <Skeleton width={32} height={32} />
              <Skeleton width={32} height={32} />
            </>
          )}
        </Row>
      </Col>
    )
  )
}

export default memo(ArtistWebLinks)
