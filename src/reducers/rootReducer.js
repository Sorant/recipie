const initialState = {
  recipes: [

  ]
}

const rootReducer = (state = initialState, action) => {
  if (action.type === 'GET_RECIPES') {
    return {
      ...state,
      recipes: [...state.recipes, action.recipes]
    }
  }
  if (action.type === 'CLEAR_RECIPES') {
    return {
      recipes: []
    }
  }
  return state;
}

export default rootReducer;