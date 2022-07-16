

import { configureStore } from "@reduxjs/toolkit";
import {imageReducer }from "./reducers/imageReducer";

export default configureStore({
  reducer: {
    image: imageReducer,
  },
});