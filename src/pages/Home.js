import React from "react";
import Product from "../components/product";
import { connect } from "react-redux";
import axios from "axios";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.$el.classList.add("active");
    });
    axios
      .get(
        "https://my-json-server.typicode.com/tuongcse/jsonplaceholder/products"
      )
      .then((res) => {
        this.props.setProducts(res.data);
      });
  }

  render() {
    return (
      <div className="home" ref={(el) => (this.$el = el)}>
        <div className="header">
          <div className="header-title">
            <span className="title">Discovery</span>
            <i className="icon-search fas fa-search"></i>
          </div>
          <ul className="filter-list">
            <li className="filter-item">All</li>
            <li className="filter-item">Shoes</li>
            <li className="filter-item">T-shirt</li>
            <li className="filter-item">Hoodie</li>
            <li className="filter-item">Dress</li>
            <li className="filter-item">Accessories</li>
            <li className="filter-item">Sport</li>
            <li className="filter-item">Kid</li>
          </ul>
        </div>

        <ul className="horizontal-prod-list">
          {this.props.products.map((product, idx) => (
            <Product
              key={idx}
              name={product.name}
              description={product.description}
              url={product.url}
              price={product.price}
            />
          ))}
        </ul>

        <div className="header">
          <div className="header-title">
            <span className="title">Just for you</span>
            <span>View all</span>
          </div>

          <Product
            name="Adidas"
            description="FORGEFIBER BOA"
            price="4.995.000₫"
            url="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/a07e5c8f7a3b47129096a92e017a8737_9366/FORGEFIBER_BOA_Mau_djen_BB7920_01_standard.jpg"
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setProducts: (products) =>
      dispatch({ type: "SET_PRODUCT", payload: { products } }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
