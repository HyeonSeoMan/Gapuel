import * as types from './ActionTypes';

export const SendAdd = (payload) => ({type: types.SendAdd, payload});
export const SendRemove = () => ({type: types.SendRemove});
export const ReceiveAdd = (payload) => ({type: types.ReceiveAdd, payload});
export const ReceiveRemove = () => ({type: types.ReceiveRemove});
// export const increment = (index) => ({type: types.INCREMENT, index});
// export const decrement = (index) => ({type: types.DECREMENT, index});
