import React from 'react';
import './shop.css'
import {connect} from 'react-redux';
import {activeCategory} from '../../store/categoryReducer';
import {addToSimpleCart, removeFromSimpleCart} from '../../store/simpleCartReducer';
import {removeFromStock, addToStock} from '../../store/productReducer';

const mapDispatchToProps = {activeCategory, addToSimpleCart,removeFromSimpleCart, removeFromStock, addToStock};

//event functions
function Shop(props){

  // console.log('commodity category', props.commodity)
  console.log('current props: ', props)
  // console.log('state: ',props.state);

  const chooseCategory = (name)=>{
    // console.log('choose category name: ', name);
    props.activeCategory(name);
  }

  const chooseProduct = (product)=>{
    // console.log('choose product to add to cart: ', product);
    props.removeFromStock(product);
    props.addToSimpleCart(product);
  }

  // const deleteFromCart = (product)=>{
  //   // props.removeFromSimpleCart(product);
  //   props.addToStock(product);
  // }

  // <button onClick={()=>deleteFromCart(cartItem)}>Remove from Cart</button>

  
  
  //return. map the reducers to give page elements
  return(
    <section>

      <section id="classification-categories">
        {props.classification.map((categories, i)=>(

          <button key={i} onClick={()=>chooseCategory(categories.name)}>{categories.displayName}</button>
        ))}
      </section>

      <ul id="commodity-products">
        {props.commodity.map((products, index)=>(
          products.category === props.active ?
        <li key={index}>
          <p>{products.name}</p>
          <p>{products.description}</p>
          <p>{products.price}</p>
          <button onClick={()=>chooseProduct(products)}>Add to Cart</button>
          <p>{products.inventoryCount}</p>
          <p>{products.category}</p>
        </li>
        : <section></section>
        ))}
      </ul>
      <ul>
        {props.cart.simpleCart.map((cartItem, idx)=>(
        <li key={idx}>
          <p>{cartItem.name}</p>
          <p>{cartItem.description}</p>
          <p>{cartItem.price}</p>
          <p>{cartItem.cartCount}</p>
          <p>{cartItem.category}</p>
        </li>
        ))}
      </ul>

    </section>
  )
}

const mapStateToProps = state =>({
  state,
  commodity: state.products.products,
  classification: state.categories.categories,
  active: state.categories.active,
  cart: state.simpleCart,
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
