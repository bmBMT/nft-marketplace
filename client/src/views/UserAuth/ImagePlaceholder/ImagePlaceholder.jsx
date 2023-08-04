import ImageBackground from '@/components/ImageBackground/ImageBackground'
import placeHolderImg from '@/assets/images/signupPlaceholder.jpg'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'

function ImagePlaceholder() {
  const { isDesktop, isTablet } = useDeviceWidth()
  const height = isDesktop ? 726 : isTablet ? 686 : 232

  return <ImageBackground img={placeHolderImg} height={height} />
}

export default ImagePlaceholder
