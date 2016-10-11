import React, { Component } from 'react';
import axios from 'axios';
import { ProductList } from '../components/ProductList/ProductList.js';

export class ProductsPage extends Component {
  constructor(props){
    super(props);
      this.state = {
        products: [],
      };
    }

  componentDidMount(){
    console.log("did mount");

    axios('http://dev.backend.xoktj00.vse.handson.pro/api/products').then((response) => {
      this.setState({
        products: response.data
      });
      console.log('response',response.data);
    })
  }

  funkce(){
    console.log('this',this)
  }
  render() {
    const products = this.state.products;
    return (
      <div>
        <div className="jumbotron">
       <button onClick={this.funkce.bind(this)}>
            CLickem
          </button>
          <h1>All Products</h1>
        </div>
        <ProductList products={products}/>
      </div>
    );
  }
}
