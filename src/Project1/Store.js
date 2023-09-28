import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";
const store=configureStore({
    reducer:{
        app: Slice
    }
});
export default store