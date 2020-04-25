import React from 'react';

import ProductFilter from './ProductFilter.jsx';
import ProductTable from './ProductTable.jsx';
import ProductAdd from './ProductAdd.jsx';
import NewProductFilter from './NewProductFilter.jsx';
import graphQLFetch from './graphQLFetch.js';

import { Panel } from 'react-bootstrap';


export default class ProductList extends React.Component {
  constructor() {
    super();
    this.productRemove = this.productRemove.bind(this);
    this.state = { products: [] };
    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
      productList {
        id category product_name price
        image_path
      }
    }`;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ products: data.productList });
    }
  }

 async productRemove(index) {
    const query = `mutation productRemove($id: Int!) {
      productRemove(id: $id)
    }`;
    const { products } = this.state;
    const { location: { pathname, search }, history } = this.props;
    const { id } = products[index];
    const data = await graphQLFetch(query, { id });
    if (data && data.productRemove) {
      this.setState((prevState) => {
        const newList = [...prevState.products];
        if (pathname === `/products/${id}`) {
          history.push({ pathname: '/products', search });
        }
        newList.splice(index, 1);
        return { products: newList };
      });
    } else {
      this.loadData();
    }
  }

  async createProduct(product) {
	    const query = `mutation productAdd($product: ProductInputs!) {
	      productAdd(product: $product) {
	        id
	      }
	    }`;

	    const data = await graphQLFetch(query, { product });
	    if (data) {
	      this.loadData();
	    }
  }
  
  render() {
    const { products } = this.state;
    const { match } = this.props;
    return (
			<React.Fragment>
				<ProductFilter />
				<hr />
				<ProductTable products = {products} productRemove={this.productRemove}/>
        <Panel>
          <Panel.Heading>
            <Panel.Title toggle>Add Product</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
				    <ProductAdd createProduct={this.createProduct}/>
          </Panel.Body>
        </Panel>
			</React.Fragment>

    );
  }
}