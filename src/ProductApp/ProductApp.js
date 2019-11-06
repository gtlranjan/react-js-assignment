import React from 'react';
import ProductList  from './ProductList';
import watch from './../assests/images/watch.jpeg';
import Cart from './Cart';
const products = [
    {
      id: 1,
      name: 'Wrist Watch',
      product_image: watch,
      available_quantity: 5,
      price: 450,
      description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
    },
   
    {
      id: 2,
      name: 'Helmet',
      product_image: './../../assests/images/helmet.jpeg',
      available_quantity: 7,
      price: 50,
      description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
    },
   
    {
      id: 3,
      name: 'Laptop',
      product_image: './../../assests/images/laptop.jpeg',
      available_quantity: 0,
      price: 500,
      description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
    },
   
    {
      id: 4,
      name: 'Shoes',
      product_image: './../../assests/images/shoes.jpeg',
      available_quantity: 4,
      price: 1500,
      description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
    },
  ];
class ProductApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {products: products,
                    cart: []            
        };
    }

    addProduct =(id)=>{
        this.setState(prevState => ({
            cart: [...prevState.cart, id]
          }))
          console.log('here id is', this.state)
    }
    removeProduct = (id) => {
        var array = [...this.state.cart]; // make a separate copy of the array
        var index = array.indexOf(id)
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({cart: array});
        }
        // console.log('new cart', this.state.cart)
    }

    render() {
        return (
            <div>

                <h1> Product list</h1>
                <div className = "col-md-12">
                    
                     <div className= "cart-detail   col-md-4">
                         <h2>Cart Details: {this.state.cart.length}</h2>
                         <Cart  products = {products}  cart = {this.state.cart} />
                     </div>
                    </div>
                
            <ProductList products = {products} addItem = {this.addProduct}   removeItem = {this.removeProduct}  />
            </div>
            
        )
    }

}
export default ProductApp;
 