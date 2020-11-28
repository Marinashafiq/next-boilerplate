import Head from "next/head";
import MainLayout from "../../components/layouts/mainLayout";
import ProductCard from "../../components/productCard";

const ProductDetails = ({productDetails}) => {
  return (
    <>
      <Head>
        <title>Product Details</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={productDetails.title} />
        <meta property="og:description" content={productDetails.description} />
        <meta property="og:image" content={productDetails.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="w-50 my-5 mx-auto text-center">
        <ProductCard data={productDetails} isClickable={false} />
      </div>
    </>
  );
};

ProductDetails.Layout = MainLayout;

ProductDetails.getInitialProps = async ({query}) => {
  const res = await fetch(`https://fakestoreapi.com/products/${query.id}`)
  const json = await res.json()
  return { productDetails : json }
}

export default ProductDetails;
