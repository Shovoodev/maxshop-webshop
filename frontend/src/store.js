import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer ,
    },
    middleware: (getDefaultMiddlewate) => getDefaultMiddlewate().concat/apiSlice.middleware,
})

export default store ; 