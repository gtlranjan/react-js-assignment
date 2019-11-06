import React from 'react';

class ProductListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addDisabled: true,
            removeDisabled: false,
            cart: []            
        };
   
    }
    addToCart = () => {
        this.setState({
            addDisabled:false,
            removeDisabled: true
        })
        var index = parseInt(this.props.item.id);
        this.props.addItem(index);
    }
    removeFromCart = () => {
        this.setState({
            addDisabled:true,
            removeDisabled:false
        })
        var index = parseInt(this.props.item.id);
        this.props.removeItem(index);
    }

 
    render () {
        const addEnabled = this.state.addDisabled;
        const removeEnabled = this.state.removeDisabled;
        return(

            <div className = 'col-md-3'>
 
                <h3>{this.props.item.name}</h3>
                <img src = {this.props.product_image} />
                <span> Quantity: {this.props.item.available_quantity}</span>
                <span> Price: {this.props.item.price}</span>
                <p> {this.props.item.description}</p>
                <button className = 'add-to-cart'  disabled={!addEnabled} onClick={this.addToCart}>Add  </button>
                <button className = 'remove-from-cart'  disabled={!removeEnabled} onClick={this.removeFromCart}>Remove  </button>
 
            </div>
           
           
        );
      }
}
export default ProductListItem;