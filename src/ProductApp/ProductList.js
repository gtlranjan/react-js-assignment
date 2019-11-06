import React from 'react';
import ProductListItem from './ProductListItem';
class ProductList extends React.Component {
  
    render() {
       
        var items = this.props.products.map((item, index) => {
            
            return (
              <ProductListItem  item={item} addItem = {this.props.addItem}   removeItem = {this.props.removeItem}    />
            );
          }); 
          return (
            <div className = "col-md-12 product-grid" > {items} </div>
          );
    }
   
}
export default ProductList;