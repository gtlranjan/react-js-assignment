import React from 'react';

class CartList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addDisabled: true,
            removeDisabled: false,
            cart: []            
        };
   
    }
   

 
    render () {
        return(
            <div className = 'col-md-3'>
                <h3>{this.props.item.name}</h3>
            </div>
           
           
        );
      }
}
export default CartList;