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

const categoryReducer = (state=initialState, action)=>{
  let {type, payload} = action;
  switch(type){
    case 'Category':
      return{...state, active: payload}

    default:
      return state;
  }
}

export default categoryReducer;