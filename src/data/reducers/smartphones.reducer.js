import {
  SMARTPHONES_GET_REQUEST,
  SMARTPHONES_GET_SUCCESS,
  SMARTPHONES_GET_FAILURE,
  LOADING_STATES,
  SORT_BY_ALPHABET,
  SORT_BY_PRICE,
  SORT_BY_COLOR,
  FILTER_PRICE,
  CART_OPEN,
} from '../constants';
import { sortAsc, sortDesc } from '../../utils/helpers';

const initialState = {
  loadingState: {},
  smartphones: [],
  currentFiltered: [],
  maxPrice: 0,
  minPrice: 0,
  price: 0,
  isCartOpen: false,
};


function smartphonesReducer(state = initialState, action) {
  const newLoadingState = { ...state.loadingState };
  console.log(action);

  switch(action.type) {
    case SMARTPHONES_GET_REQUEST:
      return{
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,   // wzielimsy po kluczu wartość w razie jakby klucz sie mam zmienic
        },
      };
    case SMARTPHONES_GET_SUCCESS:
      delete newLoadingState.SMARTPHONES_GET_REQUEST;
      const maxPrice = Math.max(...action.payload.map(smartphone => smartphone.price));

      return {
        ...state,
        smartphones: action.payload,
        currentFiltered: action.payload,
        loadingState: newLoadingState,
        maxPrice: maxPrice,
        minPrice: Math.min(...action.payload.map(smartphone => smartphone.price)),
        price: maxPrice,
      };

    case SMARTPHONES_GET_FAILURE:
      delete newLoadingState.SMARTPHONES_GET_REQUEST;

      return {
        ...state,
        smartphones: {},
        loadingState: newLoadingState,
      };

    case SORT_BY_ALPHABET:
      const sortedArr = action.payload === 'asc' ?
        sortAsc(state.currentFiltered, 'title') : sortDesc(state.currentFiltered, 'title');
      console.log(sortedArr);
      return {
        ...state,
        currentFiltered: [...sortedArr],
      };

    case SORT_BY_PRICE:
      const sortedArrPrice = action.payload === 'asc' ?
        sortAsc(state.currentFiltered, 'price') : sortDesc(state.currentFiltered, 'price');
      return {
        ...state,
        currentFiltered: [...sortedArrPrice],
      };

    case SORT_BY_COLOR:
      const smartphonesCopy = [...state.smartphones];
      const filteredItems = smartphonesCopy.filter(smartphone => smartphone.colors.includes(action.payload));
      return {
        ...state,
        currentFiltered: filteredItems,
      };

    case FILTER_PRICE:
      return {
        ...state,
        price: action.payload,
      };

    case 'ADD_TO_CART':
      return {
        ...state,
        currentFiltered: [...state.currentFiltered.map(smartphone => smartphone.id === action.payload ? { ...smartphone, inCart: true, total: 1 } : smartphone,
        )],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        currentFiltered: [...state.currentFiltered.map(smartphone => smartphone.id === action.payload ? { ...smartphone, inCart: false, total: 0 } : smartphone,
        )],
      };

    case 'INCREMENT':
      return {
        ...state,
        currentFiltered: [...state.currentFiltered.map(smartphone => smartphone.id === action.payload ? { ...smartphone, total: smartphone.total + 1 } : smartphone,
        )],
      };

    case 'DECREMENT':
      return {
        ...state,
        currentFiltered: [...state.currentFiltered.map(smartphone => smartphone.id === action.payload ? { ...smartphone, total: smartphone.total + -1 } : smartphone,
        )],
      };

    case CART_OPEN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    default:
      return state;
  }
}

export default smartphonesReducer;
