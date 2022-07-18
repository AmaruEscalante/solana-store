import styles from "../styles/Product.modules.css";
import IPFSDownload from "./IpfsDownload";

const Product = () => {
  const { id, name, price, description, image_url } = product;

  return (
    <div className={styles.product_container}>
      <div>
        <img className={styles.product_image} src={image_url} alt={name} />
      </div>

      <div className={styles.product_details}>
        <div className={styles.product_text}>
          <div className={styles.product_title}>{name}</div>
          <div className={styles.product_description}>{description}</div>
        </div>

        <div className={styles.product_action}>
          <div className={styles.product_price}>{price} USDC</div>
          {/* I'm hardcoding these for now, we'll fetch the hash from the API later*/}
          <IPFSDownload
            filename="emojis.zip"
            hash="QmWWH69mTL66r3H8P4wUn24t1L5pvdTJGUTKBqT11KCHS5"
            cta="Download emojis"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
