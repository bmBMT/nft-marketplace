import ImageBackground from '@/components/ImageBackground/ImageBackground.jsx'
import placeHolderImg from '@/assets/images/signupPlaceholder.jpg'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import { memo } from 'react'

function ImagePlaceholder() {
  const { isDesktop, isTablet } = useDeviceWidth()
  const height = isDesktop ? 726 : isTablet ? 686 : 232

  return <ImageBackground img={placeHolderImg} height={height} />
}

export default memo(ImagePlaceholder)
