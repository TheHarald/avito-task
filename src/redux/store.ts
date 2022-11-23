import { configureStore } from "@reduxjs/toolkit"
import { newsApiSlice } from "./news/newsApiSlice"

export const store = configureStore({
    reducer: {
        [newsApiSlice.reducerPath]: newsApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApiSlice.middleware)



})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

type Animal = 'cat' | 'dog' | 'pig'