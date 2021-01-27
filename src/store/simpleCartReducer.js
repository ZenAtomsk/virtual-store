//categories reducer

let initialState = {
  simpleCart:[]
};

//actions
export const addToSimpleCart = (product)=>{
  // console.log('product in simplecart: ', product)
  return{
    type: 'ADD',
    payload: product,
  }
}

export const removeFromSimpleCart = (product)=>{
  // console.log('product in simplecart: ', product)
  return{
    type: 'REMOVE',
    payload: product,
  }
}

const simpleCartReducer = (state=initialState, action)=>{
  let {type, payload} = action;
  switch(type){
    case 'ADD':
      // do case things
      // state.simpleCart.name !== payload ? state.simpleCart.push(payload) : state.simpleCart.inventoryCount +1;
      state.simpleCart.push(payload)
      return{...state}

    case 'REMOVE':
      // do case things
      // state.simpleCart.push(payload);
      return{...state}
    

    default:
      return state;
  }
}

export default simpleCartReducer;