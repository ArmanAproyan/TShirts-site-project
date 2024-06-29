import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const myBasketSlice = createSlice({
    name: 'myBasketSlice',
    initialState,
    reducers: {
        addToBasket: (state,action) => {
        state.push(action.payload)
    },
    isIncludes: (state,action) => {
        const includes = state.findIndex((val) => {
            return val.id == action.payload.id
        });
        state[includes].count += 1
        state[includes].price += action.payload.price
    },
    countIncriment: (state,action) => {
        state[action.payload].count += 1 
        state[action.payload].price += state[action.payload].subTotal
    },
    countDecriment: (state,action) => {
        state[action.payload].count -= 1 
        state[action.payload].price -= state[action.payload].subTotal
        if(state[action.payload].price == 0) {
            state.splice(action.payload,1)
        }
    },
    clearBasket: (state) => {
        state.length = 0
    }

    }
});

export const {addToBasket,isIncludes,countIncriment,countDecriment} = myBasketSlice.actions
export default myBasketSlice.reducer