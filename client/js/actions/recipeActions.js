export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS"
export const CREATE_PRODUCT_ERROR = "CREATE_PRODUCT_ERROR"
export const FETCH_PRODCTS = "FETCH_PRODCTS"
export const FETCH_PRODCTS_ERROR = "FETCH_PRODCTS_ERROR"
export const BEFORE_STATE_PRODUCT = "BEFORE_STATE_PRODUCT"
export const SINGLE_PRODUCT_SUCCESS = "SINGLE_PRODUCT_SUCCESS"
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS"
export const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR"
export const DELETE_PRODUCT_SUCCESS = "DELETE_POST_SUCCESS"
export const DELETE_PRODUCT_ERROR = "DELETE_POST_ERROR"

import axios from 'axios';
import API_ROUTE from '../apiRouter';

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_PRODUCT })
    try{
      const res  = await axios.get(`${API_ROUTE}`)
      dispatch({ type: FETCH_PRODCTS, payload: res.data })
    } catch(error) {
      dispatch({ type: FETCH_PRODCTS_ERROR, payload: error ? res.message : "" })
    }
  }
}

export const createProduct = (name) => {
  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_PRODUCT })
    try {
      const res = await axios.post(`${API_ROUTE}`, name)
      dispatch({
        type: CREATE_PRODUCT_SUCCESS,
        payload: res.data
      })
    } catch(err) {
      console.log("error")
      dispatch({
        type: CREATE_PRODUCT_ERROR,
        payload: err.data
      })
    }
  }
}

  export const deleteProduct = ({id}) => {
    return async (dispatch) => {
      dispatch({ type: BEFORE_STATE_PRODUCT })
      try {
        const res = await axios.delete(`${API_ROUTE}/${id}`)
        dispatch({
          type: DELETE_PRODUCT_SUCCESS,
          payload: {
            deletedID: id,
            message: res.data
          }
        })
      } catch(err) {
        dispatch({
          type: DELETE_PRODUCT_ERROR,
          payload: err.data
        })
      }
    }
  }
