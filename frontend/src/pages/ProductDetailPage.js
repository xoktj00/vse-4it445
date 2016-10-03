import React, { Component } from 'react';
import classNames from 'classnames';

export class ProductDetailPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTabId: 0,
    };
  }
  selectTab(event, tabId) {
    this.setState({
      activeTabId: tabId,
    });
    alert(tabId);
  }

  render() {
    const { productId } = this.props.params;
    const {activeTabId} = this.state;
    return (
      <div>
        <div className="jumbotron">
          <h1>Škoda Superb</h1>
        </div>
        <div className="product">
          <ul className="nav nav-tabs">
            <li role="presentation" className={classNames({ active: 0 === activeTabId })}>
              <a href="#" onClick={(event) => this.selectTab(event, 0)}>
                Description
              </a>
            </li>
            <li role="presentation" className={classNames({ active: 1 === activeTabId })}>
              <a href="#" onClick={(event) => this.selectTab(event, 1)}>
                Parameters
              </a>
            </li>
            <li role="presentation" className={classNames({ active: 2 === activeTabId })}>
              <a href="#" onClick={(event) => this.selectTab(event, 2)}>
                fasdhfk
              </a>
            </li>
            <li role="presentation" className={classNames({ active: 3 === activeTabId })}>
              <a href="#" onClick={(event) => this.selectTab(event, 3)}>
                aksjdhfk
              </a>
            </li>
          </ul>
          <h3>id: {productId}</h3>
          <p>price: <span className="price">750 000 Kč</span></p>
          <p>Luxury car produced in the Czech Republic.</p>
        </div>
      </div>
    );
  }
}
