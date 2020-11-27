import { Card, CardContent } from "@material-ui/core";
import { useRouter } from "next/router";
import styles from "./product.module.scss";

const ProductCard = ({ data,isClickable }) => {
  const router = useRouter();
  const lang = router.asPath.split("/")[1];
  return (
    <Card className={styles.product_card} onClick={()=> isClickable ? router.push(`${lang}/products/${data.id}`) : null}>
      <CardContent>
        <div className="mx-auto text-center mb-4">
          <img
            src={data.image}
            className={styles.product_image}
          />
        </div>
        <p>{data.title}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
