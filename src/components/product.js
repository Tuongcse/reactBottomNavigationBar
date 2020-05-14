import React from "react";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddingToCart: false,
    };
  }

  onClick() {
    this.setState({
      isAddingToCart: !this.state.isAddingToCart,
    });
  }
  render() {
    return (
      <div className={this.state.isAddingToCart ? "product active" : "product"}>
        <div className="product__name">{this.props.name}</div>
        <div className="product__description">{this.props.description}</div>
        <div className="product__image">
          <img alt="prod_image" src={this.props.url} />
        </div>
        <div className="product__price">{this.props.price}</div>
        <span className="add-to-cart">
          <i
            className="toggler fas fa-plus-circle"
            onClick={this.onClick.bind(this)}
          ></i>
          <i className="fas fa-cart-plus"></i>
          <span className="cart-text">Add to cart +</span>
        </span>
      </div>
    );
  }
}
