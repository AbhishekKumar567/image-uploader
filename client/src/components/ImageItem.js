

import React from "react";
import { Paper, Grid, Typography,Stack } from "@mui/material";



export const ImageItem = ({ image }) => {
  const { name, description, profile } = image;
  
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper
        style={{
          p: 1,
          borderTopLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <Stack spacing={1.5}>
          <img src={profile} alt="user" style={{ borderTopLeftRadius: 15 }} />
          <div>
            <Typography style={{ fontWeight: 300, letterSpacing: 2.5,textAlign: "center",margin: 0}}>{name}</Typography>
            <Typography style={{fontWeight: 300,textAlign: "center",marginTop: "8px"}}>{description}</Typography>
            </div>   
        </Stack>
      </Paper>
    </Grid>
  );
};
