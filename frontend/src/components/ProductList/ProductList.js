import React, { Component } from 'react';

import { ProductListItem } from './ProductListItem.js';

export class ProductList extends Component {
  render() {
    const { products } = this.props;
    // const products = this.props.products; to same jako predchozi radek
    

    return (
      <div className="products">
        {products.map(product =>
          <ProductListItem product={product} key={product.id}/>
        )}
      </div>
    );
  }
}
