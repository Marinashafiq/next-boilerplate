import React, { useEffect } from "react";
import MainLayout from "../../components/layouts/mainLayout";
import ProductCard from "../../components/productCard";
import { useDispatch, useSelector } from "react-redux";
import { requestProductDetails } from "../../store/products/actions";
import { useRouter } from "next/router";
import Head from "next/head";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const productDetails = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(requestProductDetails(router.query.id));
  }, []);

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

export default ProductDetails;
