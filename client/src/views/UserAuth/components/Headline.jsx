import { useDeviceWidth } from "@/utils/hooks/useDeviceWidth.js"
import { memo } from 'react'

const Headline = ({ text }) => {
  const { isDesktop } = useDeviceWidth()

  return isDesktop ? <h2>{text}</h2> : <h3>{text}</h3>
}

export default memo(Headline)
