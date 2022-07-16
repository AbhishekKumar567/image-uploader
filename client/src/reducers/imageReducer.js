

import { createReducer } from "@reduxjs/toolkit";
import {
  getImage,
  
  createImage,
 
  getImages,
} from "../actions/imageAction";

const initialState = {
  images: [],
};

export const imageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getImages.fulfilled, (state, action) => {
      state.images = action.payload.data;
    })
    .addCase(createImage.fulfilled, (state, action) => {
      state.images = [action.payload, ...state.images];
    })
    .addCase(getImage.fulfilled, (state, action) => {
      state.images = action.payload.data;
    })

});
