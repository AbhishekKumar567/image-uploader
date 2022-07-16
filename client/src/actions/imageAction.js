
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL ='http://localhost:4000'

export const createImage = createAsyncThunk(
    "images/createImage",
    async (image) => {
      const { data } = await axios.post(`${URL}/images`, image);
      return data;
    }
  );

export const getImage = createAsyncThunk(
  "images/getImage",
  async (imageId) => {
    const { data } = await axios.get(`${URL}/images/${imageId}`);
    return data;
  }
);

export const getImages = createAsyncThunk(
    "images/getImages",
  async () => {
    const { data } = await axios.get(`${URL}/images`);
    return data;
  }
);

export const uploadProfile = createAsyncThunk(
    "images/uploadProfile",
    async ({ id, profile }) => {
      const { data } = await axios.post(`${URL}/images/${id}/profile`, profile);
      return data;
    }
  );