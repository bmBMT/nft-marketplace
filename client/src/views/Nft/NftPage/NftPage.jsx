import { useParams } from "react-router-dom"

const NftPage = () => {
  const { id } = useParams();

  return (
    <div>
      NFT
    </div>
  )
}

export default NftPage
