import API from 'data/fetch';

import {
  SMARTPHONES_GET_REQUEST,
  SMARTPHONES_GET_SUCCESS,
  SMARTPHONES_GET_FAILURE,
  SORT_BY_ALPHABET,
  SORT_BY_PRICE,
  FILTER_PRICE,
  CART_OPEN,
} from '../constants';

export const fetchSmartphones = id => async dispatch => {
  dispatch({
    type: SMARTPHONES_GET_REQUEST,
  });

  try {
    console.log(API);
    const response = await API.smartphones.fetchSmartphones(id);
    const data = await response.json();
    dispatch({
      type: SMARTPHONES_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SMARTPHONES_GET_FAILURE,
    });
  }
};

export const sortByPrice = payload => ({
  type: SORT_BY_PRICE,
  payload,
});

export const sortByAlphabet = payload => ({
  type: SORT_BY_ALPHABET,
  payload,
});

export const filterPrice = payload => ({
  type: FILTER_PRICE,
  payload,
});

export const  addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const  removeFromCart = payload => ({
  type: 'REMOVE_FROM_CART',
  payload,
});

export const  increment = payload => ({
  type: 'INCREMENT',
  payload,
});

export const  decrement = payload => ({
  type: 'DECREMENT',
  payload,
});

export const  toggleCart = () => ({
  type: CART_OPEN,
});

