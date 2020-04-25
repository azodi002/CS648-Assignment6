import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import {
  Button, Glyphicon, Tooltip, OverlayTrigger, Table,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProductRow = withRouter(({
  product, productRemove, index,
}) => {
  const editTooltip = (
    <Tooltip id="close-tooltip" placement="top">Edit Product</Tooltip>
  );
    const deleteTooltip = (
    <Tooltip id="delete-tooltip" placement="top">Delete Product</Tooltip>
  );

  return (
    <tr>
      <td>{product.category}</td>
      <td>{product.product_name}</td>
      <td>{product.price}</td>
      <td><a target="_blank" href={product.image_path}>View </a></td>
      <td>
        <LinkContainer to={`/productedit/${product.id}`}>
          <OverlayTrigger delayShow={500} overlay={editTooltip}>
            <Button bsSize= "xsmall">
              <Glyphicon glyph="edit"/>
            </Button>
          </OverlayTrigger>
        </LinkContainer>
        <OverlayTrigger delayShow={500} overlay={deleteTooltip}>
          <Button bsSize="xsmall" onClick={() => { productRemove(index); }}>
            <Glyphicon glyph = "trash" />
          </Button>
        </OverlayTrigger>
      </td>
    </tr>
  );
});

export default function ProductTable({ products, productRemove }) {
  const ProductRows = products.map((product, index) => (
    <ProductRow
      key={product.id}
      product={product}
      productRemove={productRemove}
      index={index}
    />
  ));

    return (
    <Table bordered condensed hover responsive>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {ProductRows}
      </tbody>
    </Table>
  );
}