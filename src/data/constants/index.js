export * from './smartphones.constants';

export const  SORT_BY_COLOR = 'SORT_BY_COLOR';
export const  SORT_BY_ALPHABET = 'SORT_BY_ALPHABET';
export const  SORT_BY_PRICE = 'SORT_BY_PRICE';
export const  FILTER_PRICE = 'FILTER_PRICE';
export const  LOAD_DATA_TO_FILTER = 'LOAD_DATA_TO_FILTER';
export const  CART_OPEN = 'CART_OPEN';
export const CLEAR_CART = 'CLEAR_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


export const AVAILABLE_FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_WHITE: 'SHOW_WHITE',
  SHOW_BLACK: 'SHOW_BLACK',
  SHOW_PINK: 'SHOW_PINK',
  SHOW_BLUE: 'SHOW_BLUE',
  SHOW_GOLD: 'SHOW_GOLD',
  SHOW_GRAY: 'SHOW_GRAY',
  SHOW_RED: 'SHOW_RED',
};


export const LOADING_STATES = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  FAILED: 'FAILED',
};

export default {
  LOADING_STATES,
};
