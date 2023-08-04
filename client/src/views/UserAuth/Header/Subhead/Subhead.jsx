import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'

const Subhead = () => {
  const { isDesktop } = useDeviceWidth()
  const fontSize = isDesktop ? 22 : 16
  const lineHeight = isDesktop ? '160%' : '140%'

  return (
    <div style={{ fontSize, lineHeight }}>
      Welcome! enter your details and start <br /> creating, collecting and selling NFTs.
    </div>
  )
}

export default Subhead
