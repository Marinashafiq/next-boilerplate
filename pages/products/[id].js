import React from "react";
import MainLayout from "../../components/layouts/mainLayout";
import ProductCard from "../../components/productCard";
import { connect } from "react-redux";
import { requestProductDetails } from "../../store/products/actions";
import { withRouter } from "next/router";

class ProductDetails extends React.Component {
  componentDidMount() {
    this.props.requestProductDetails(1);
  }

  render() {
    return (
      <div className="w-50 my-5 mx-auto text-center">
        <ProductCard data={this.props.productDetails} isClickable={false}/>
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => ({
  productDetails: products,
});

ProductDetails.Layout = MainLayout;

export default connect(mapStateToProps, { requestProductDetails })(
    ProductDetails
);
