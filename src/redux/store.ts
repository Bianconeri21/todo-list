import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import todoSlice from "./todoSlice";

export const store = configureStore({
    reducer: {
        todos: todoSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch