//categories reducer

let initialState = {
  categories:[
    {name: 'electronics', displayName: 'Electronics', description: 'electrical stuff and things'},
    {name: 'clothes', displayName: 'Clothes', description: 'cover your goodies'},
    {name: 'food', displayName: 'Food', description: 'eat some stuff'},
  ],
    active: ''
};

//actions
export const activeCategory = (name)=>{
  return{
    type: 'Category',
    payload: name
  }
}

// export const action = (argument)=>{
//   return{
//     type: '',
//     payload: '',
//   }
// }

//export function with state and action as arguments
//action has type and payload
//switch statement to determine wht type
//default return is state

const categoryReducer = (state=initialState, action)=>{
  let {type, payload} = action;
  switch(type){
    case 'Category':
      // do case things
      // let categories = state.categories.map(categories=>{
      //   if(categories.name === payload){
      //     return {name: categories.name, displayName: categories.displayName, description: categories.description, active: payload }
      //   }
      //   return categories;
      // })
      return{...state, active: payload}
    

    default:
      return state;
  }
}

export default categoryReducer;