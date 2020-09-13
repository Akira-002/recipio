import {
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR,
  FETCH_PRODCTS,
  FETCH_PRODCTS_ERROR,
  BEFORE_STATE_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR
} from '../actions/recipeActions';

export const defaultState = {
  recipes: [],
  recipe: {name: {}},
  recipesError: null,
  isLoading: false
};

export const productsState = (state = defaultState, action) => {

  const { payload, type } = action
  switch(type) {

    case BEFORE_STATE_PRODUCT:
      return {
        ...state,
        recipesError: null,
        isLoading: true,
      }

    case FETCH_PRODCTS:
      return {
        ...state,
        recipes: payload,
        isLoading: false,
      }

    case FETCH_PRODCTS_ERROR:
      return {
        ...state,
        recipesError: payload,
        isLoading: false
      }

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        name: payload,
        recipesError: null,
        isLoading: false,
      }

    case GET_PRODUCT_ERROR:
      return {
        ...state,
        recipesError: payload,
        isLoading: false
      }

    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        recipes: [payload, ...state.recipes],
        recipesError: null,
        isLoading: false
      }

    case CREATE_PRODUCT_ERROR:
      return {
        ...state,
        recipesError: payload,
        isLoading: false
      }

     case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        recipes: state.recipes.filter(item => item.id !== payload.deletedID),
        recipesError: null,
        isLoading: false
      }

    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        recipesError: payload,
        isLoading: false
      }

    default:
      return state
  }
}
