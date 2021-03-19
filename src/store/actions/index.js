import * as types from './ActionTypes';

export const SendAdd = (payload) => ({type: types.SendAdd, payload});
export const SendRemove = (id) => ({type: types.SendRemove, id});
export const SendAddHistory = (payload) => ({type: types.SendAddHistory, payload});
export const ReceiveAdd = (payload) => ({type: types.ReceiveAdd, payload});
export const ReceiveRemove = (id) => ({type: types.ReceiveRemove, id});
export const ReceiveAddHistory = (payload) => ({type: types.ReceiveAddHistory, payload});
// export const increment = (index) => ({type: types.INCREMENT, index});
// export const decrement = (index) => ({type: types.DECREMENT, index});
