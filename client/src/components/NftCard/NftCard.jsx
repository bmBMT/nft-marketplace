import { Link } from 'react-router-dom'
import styles from './NftCard.module.scss'

const NftCard = ({ nft, user, backgroundColor }) => {
  const categorieClassNames = {
    art: styles.staticImg,
  }

  return (
    <Link to={`/nft/${nft.id}`} className={`${styles.card} ${categorieClassNames[nft.categorie]}`} style={{ backgroundColor }}>
      <div className={styles.imgContainer}>
        <div className={styles.image} style={{ backgroundImage: `url(${nft.img})` }} />
      </div>
      <div className={styles.info}>
        <div className={styles.nftInfo}>
          <h5>{nft.name}</h5>
          <div className={styles.artistInfo}>
            <img className={styles.avatar} src={user.avatar} alt="avatar" />
            <span>{user.username}</span>
          </div>
        </div>
        <div className={styles.additionalInfo}>
          <section className={styles.additional}>
            <label>Price</label>
            <span>{nft.price} ETH</span>
          </section>
          {/* TODO FOR AUCTION */}
          {/* <div className={styles.additional}>
            <label>Highest Bid</label>
            <span></span>
          </div> */}
        </div>
      </div>
    </Link>
  )
}

export default NftCard
