//products reducer

//Each product should have a category association, name, description, price, inventory count
let initialState = {
  products:[
    {name: 'name 1',  description: 'description 1', price: '$14.99', inventoryCount: 10, category: 'electronics', cartCount: 0},

    {name: 'name 2',  description: 'description 2', price: '$24.99', inventoryCount: 9, category: 'electronics', cartCount: 0},

    {name: 'name 3',  description: 'description 3', price: '$34.99', inventoryCount: 8, category: 'electronics', cartCount: 0},

    {name: 'name 4',  description: 'description 4', price: '$44.99', inventoryCount: 7, category: 'clothes', cartCount: 0},

    {name: 'name 5',  description: 'description 5', price: '$54.99', inventoryCount: 6, category: 'clothes', cartCount: 0},

    {name: 'name 6',  description: 'description 6', price: '$64.99', inventoryCount: 5, category: 'clothes', cartCount: 0},

    {name: 'name 7',  description: 'description 7', price: '$74.99', inventoryCount: 4, category: 'food', cartCount: 0},

    {name: 'name 8',  description: 'description 8', price: '$84.99', inventoryCount: 3, category: 'food', cartCount: 0},

    {name: 'name 9',  description: 'description 9', price: '$94.99', inventoryCount: 2, category: 'food', cartCount: 0},

    // {name: '',  description: '', price: '', inventoryCount: 0, category: '', cartCount: 0}
    //create a function to add items to this list.
  ]
};

// actions
export const removeFromStock = (product)=>{
    return{
      type: 'DECREMENT',
      payload: product,
    }
  }

export const addToStock = (product)=>{
  return{
    type: 'INCREMENT',
    payload: product
  }
}

//export function with state and action as arguments
//action has type and payload
//switch statement to determine wht type
//default return is state

const productsReducer = (state=initialState, action)=>{
  let {type, payload} = action;
  switch(type){

    case 'DECREMENT':
      console.log('state: 1', state)
      let removeFromStock = state.products.map(product =>{
        console.log('product```````: ', product);
        console.log('payload```````: ', payload)
        if(product.name === payload.name){
        
          // let addCartCount = product.cartCount +1;
          // let removedFromInventory = product.inventoryCount -1;
          
          // return{cartCount: addCartCount, inventoryCount: removedFromInventory, }
          console.log('this wont show:')
        }
        return console.log('error, state', state)
      })
      return {removeFromStock, ...state} //

      case 'INCREMENT':
      // let addedToInventory = state.inventoryCount +1;
      // let removeFromCartCount = state.cartCount -1;

      let returnToStock = state.products.map(product =>{
        if(product.name === payload.name){
          
          return{...product, cartCount: product.cartCount -1, inventoryCount: product.inventoryCount +1, name: product.name, price: product.price}
        }
        return product;
      })
      return {returnToStock, ...state} //
    // case 'Category':
    //   // do case things

    //   let products = state.products.map(products=>{
    //     if(products.name === payload){
    //       return {name: products.name, description: products.description, price: products.price, inventoryCount: products.inventoryCount, category: products.category }
    //     }
    //     return products;
    //   })
    //   return{...state, products} //active: payload

    // case 'Product':
    //   return{...state, active: payload}


    default:
      return state;
  }
}

export default productsReducer;