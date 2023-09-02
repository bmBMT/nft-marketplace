import CustomLink from '@/components/CustomLink/CustomLink'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import Col from '@/components/Col/Col'
import { memo } from 'react'

const FooterExplorePages = () => {
  const { isDesktop } = useDeviceWidth()

  return (
    <> 
      <Col gap={'30px'}>
        <h5 style={{ fontFamily: 'Space Mono', color: '#FFFFFF' }}>Explore</h5>
        <Col gap={'20px'} maxWidth={isDesktop ? '238px' : '690px'}>
          {['Marketplace', 'Rankings'].map((name, index) => (
            <CustomLink key={index} to={'/'} color="#CCCCCC" children={name} />
          ))}
        </Col>
      </Col>
    </>
  )
}

export default memo(FooterExplorePages)
