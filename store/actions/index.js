import * as types from './ActionTypes';

export const add = (payload) => ({type: types.ADD, payload});
export const remove = () => ({type: types.REMOVE});
export const increment = (index) => ({type: types.INCREMENT, index});
export const decrement = (index) => ({type: types.DECREMENT, index});
