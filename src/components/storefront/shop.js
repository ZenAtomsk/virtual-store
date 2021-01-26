import React from 'react';
import {connect} from 'react-redux';
import {activeCategory} from '../../store/categoryReducer';
import './shop.css'
// import {productChoice} from '../../store/productReducer';


const mapDispatchToProps = {activeCategory}; //productChoice 

//event functions
function Shop(props){
  console.log('commodity category', props.commodity)
  console.log('active category', props)
  console.log('state:  ==================',props.state);
  const chooseCategory = (name)=>{
    console.log('choose category name: ', name);
    props.activeCategory(name);
  }
  
  
  //return. map the reducers to give page elements
  return(
    <section>

      <section id="classification-categories">
        {props.classification.map((categories, index)=>(

          <button key={index} onClick={()=>chooseCategory(categories.name)}>{categories.displayName}</button>
        ))}
      </section>

      <ul id="commodity-products">
        {props.commodity.map((products, index)=>(
          products.category === props.active ?
        <li key={index}>
          <p>{products.name}</p>
          <p>{products.description}</p>
          <p>{products.price}</p>
          <button>Add to Cart</button>
          <p>{products.inventoryCount}</p>
          <p>{products.category}</p>
        </li>
        : <section></section>
        ))}
      </ul>

    </section>
  )
}

const mapStateToProps = state =>({
  state,
  commodity: state.products.products,
  classification: state.categories.categories,
  active: state.categories.active
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);