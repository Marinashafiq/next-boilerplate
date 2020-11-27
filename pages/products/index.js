import React from "react";
import { withTranslation } from "../../i18n";
import MainLayout from "../../components/layouts/mainLayout";
import ProductCard from "../../components/productCard";
import { connect } from "react-redux";
import { requestProducts } from "../../store/products/actions";

class Products extends React.Component {
  componentDidMount() {
    this.props.requestProducts();
  }

  renderProducts = () => {
    return this.props.products.map((products, index) => {
      return (
        <div className="col-md-3 mb-4 d-flex align-items-stretch" key={index}>
          <ProductCard data={products} isClickable={true}/>
        </div>
      );
    });
  };

  render() {
    return (
        <div className="row container mx-auto my-5">
            {this.props.products && this.renderProducts()}
        </div>
    )
  }
}

const mapStateToProps = ({ products }) => ({
  products : Object.values(products),
});

Products.getInitialProps = async () => ({
  namespacesRequired: ["locale"],
});

Products.Layout = MainLayout;

export default connect(mapStateToProps, { requestProducts })(
  withTranslation("locale")(Products)
);
