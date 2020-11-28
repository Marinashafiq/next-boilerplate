import { Card, CardContent } from "@material-ui/core";
import { useRouter } from "next/router";
import styles from "./product.module.scss";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const ProductCard = ({ data, isClickable }) => {
  const router = useRouter();
  const lang = router.asPath.split("/")[1];
  return (
    <Card
      className={`${styles.product_card} ${
        isClickable ? styles.clickable : styles.notClickable
      }`}
      onClick={() =>
        isClickable ? router.push(`${lang}/products/${data.id}`) : null
      }
    >
      <CardContent>
        <div className="mx-auto text-center mb-4">
          <img src={data.image} className={styles.product_image} />
        </div>
        <p className="mb-0">{data.title}</p>
        {!isClickable && (
          <div className="mt-4">
            <FacebookShareButton
              url={`https://next-boilerplate-xi.vercel.app/en/products/${data.id}`}
              className="mx-3"
            >
              <FacebookIcon size={34} round />
            </FacebookShareButton>
            <LinkedinShareButton
              url={`https://next-boilerplate-xi.vercel.app/en/products/${data.id}`}
              className="mx-3"
            >
              <LinkedinIcon size={34} round />
            </LinkedinShareButton>
            <TwitterShareButton
              url={`https://next-boilerplate-xi.vercel.app/en/products/${data.id}`}
              className="mx-3"
            >
              <TwitterIcon size={34} round />
            </TwitterShareButton>
            <WhatsappShareButton
              url={`https://next-boilerplate-xi.vercel.app/en/products/${data.id}`}
              className="mx-3"
            >
              <WhatsappIcon size={34} round />
            </WhatsappShareButton>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
