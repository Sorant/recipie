const initialState = {
  recipes: [

  ]
}

const rootReducer = (state = initialState, action) => {
  if (action.type === 'GET_RECIPES') {
    return {
      ...state,
      recipes: action.recipes
    }
  }
  return state;
}

export default rootReducer;