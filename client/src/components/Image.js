import React, { useEffect } from "react";
import { Container, Grid, Fab } from "@mui/material";

import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {ImageItem} from "./ImageItem";
import { getImages } from "../actions/imageAction";
import { useDispatch, useSelector } from "react-redux";

export const Image = () => {
  const navigate = useNavigate();
  const images = useSelector((store) => store.image.images);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);
  return (
    <Container style={{ py:4 }}>
      <Fab
        onClick={() => navigate("/images/add")}
        color="secondary"
        style={{
          position: "fixed",
          right: 30,
          bottom: 20
          
        }}
      >
        <Add />
      </Fab>
      <Grid container spacing={2}>
        {images.map((image) => 
        (
          <ImageItem key={image._id} image={image} />
        ))}
      </Grid>
    </Container>
  );
};
