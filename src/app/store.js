import { configureStore } from "@reduxjs/toolkit";
import myBasketSlice from "../features/MyBasketSlice/myBasketSlice";


const store = configureStore({
    reducer: {
        myBasket: myBasketSlice
    }
});

export default store 