

import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import { createImage, uploadProfile } from "../actions/imageAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";


const Input = styled("input")({
  display: "none",
});


export const AddImage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [profile, setProfile] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const image = { name, description};
    const originalPromiseResult = await dispatch(
      createImage(image)
    ).unwrap();

    const formData = new FormData();
    formData.append("profile", profile);

    await dispatch(
      uploadProfile({ id: originalPromiseResult.data._id, profile: formData })
    );
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent>
          <TextField
            id="outlined-basic"
            label="Full Name"
            placeholder="Enter Image Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            placeholder="Enter Image decription"
            variant="outlined"
            fullWidth
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
         

          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => setProfile(e.target.files[0])}
            />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </CardContent>
        <CardActions>
          <Button type="submit" size="small">
            Create Image
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};