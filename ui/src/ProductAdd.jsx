import React from 'react';
import PropTypes from 'prop-types';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.ProductAdd;
    const product = {
      price: form.price.value,
      product_name: form.product_name.value,
      image_path: form.image_path.value,
      category: form.category.value,
    };


    this.props.createProduct(product);
    form.price.value = '';
    form.product_name.value = '';
    form.image_path.value = '';
    form.category.value = 'Shirts';
  }

  render() {
    return (
			<form name = "ProductAdd" onSubmit={this.handleSubmit}>
				<div>
					<span class="category_label">Category </span>
					<span class="price_label">Price Per Unit</span>
				</div>
				<select id="category">
				  <option value="Shirts">Shirts</option>
				  <option value="Jeans">Jeans</option>
				  <option value="Jackets">Jackets</option>
				  <option value="Sweaters">Sweaters</option>
				  <option value="Accessories">Accessories</option>
				</select>


				<span class="currencyinput">$<input type="text" name="price"/></span>
				<br />
				<br />

				<div>
					<span class="product_label">Product Name </span>
					<span class="image_label">Image URL</span>
				</div>
				<input type = "text" id = "product_text" name = "product_name" placeholder = "" />
				<input type = "text" name = "image_path" placeholder = "" />

				<br />
				<br />
				<button id = "add_product_button">Add Product</button>
			</form>
    );
  }
}