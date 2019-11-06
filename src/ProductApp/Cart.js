import React from 'react';
import CartList from './CartList';
class Cart extends React.Component {
  
    render() {
       
        var items = this.props.products.map((item, index) => {
            if(this.props.cart.indexOf(item.id) > 0) {
                return (
                    <CartList  item={item}     />
                );
            }          
          }); 
          return (
            <div className = "col-md-6" > {items} </div>
          );
    }
   
}
export default Cart;