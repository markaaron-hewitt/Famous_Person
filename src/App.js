import './App.css';
import { useState } from "react";
import { Grid, Typography, Paper} from "@mui/material";
import PhotoRadio from "./Components/PhotoRadio";
import React from 'react';

function App() {
  
  const [selectedPhoto, setselectedPhoto] = useState(0);
  const [photoDimensions, setphotoDimensions] = useState([300,227.2078501338091]);
  const radioFn = (x) => {
    setselectedPhoto(x);
    const img = new Image();
    img.src = images[x];
    setphotoDimensions([300,300*img.width/img.height]);
    };
  var images = ["https://upload.wikimedia.org/wikipedia/commons/b/b6/Queen_Elizabeth_II_in_March_2015.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d9/Day_194_-_West_Midlands_Police_-_Royal_Diamond_Jubilee_Visit_%287555521830%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Elizabeth_II_in_Queensland%2C_Australia%2C_1970.jpg/1280px-Elizabeth_II_in_Queensland%2C_Australia%2C_1970.jpg"]

  return (
    <Grid container padding = {5} spacing = {5} align={"center"} justifyContent={"center"}>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap" rel="stylesheet"/>
      <Grid item xs={12}>
        <Typography fontSize={70} fontFamily={"Bonheur Royale"}>Queen Elizabeth II</Typography>
      </Grid>

      <Grid item xs={12}>
        <Paper 
          elevation={5}
          sx = {{
            height: photoDimensions[0],
            width: photoDimensions[1],
            backgroundImage: "url("+images[selectedPhoto]+")",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <PhotoRadio selectedPhoto = {selectedPhoto} handleChange = {radioFn}/>
      </Grid>

      <Grid item xs={6}>
        <Paper elevation={3} sx = {{height: 250, padding: 4}}>
          <Typography fontWeight={700}>Bio</Typography>
          <Typography>{<br />}</Typography>
          <Typography>Elizabeth II is the Queen of Britain and 13 of the 53 Commonwealth Nations. She is formally known as Queen Elizabeth II. Queen Elizabeth is also the Head of Commonwealth and The Supreme Governor of the Church of England. She succeeded her father on February 6, 1952, and has been the reigning monarch for over 62 years. She is the second longest reigning British monarch behind Queen Victoria. Charles, Prince of Wales is the heir apparent to the throne.</Typography>
          <Typography>{<br />}</Typography>
          <Typography>
            <a href="https://short-biography.com/elizabeth-ii.htm">https://short-biography.com/elizabeth-ii.htm</a>
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <Paper elevation={3} sx = {{height: 250, padding: 4}}>
          <Typography fontWeight={700}>External Links</Typography>
          <Typography>{<br />}</Typography>
          <Typography>
            <a href="https://en.wikipedia.org/wiki/Elizabeth_II">https://en.wikipedia.org/wiki/Elizabeth_II</a>
          </Typography>
          <Typography>
            <a href="https://platinumjubilee.gov.uk/">https://platinumjubilee.gov.uk/</a>
          </Typography>
          <Typography>
            <a href="https://www.royal.uk/her-majesty-the-queen">https://www.royal.uk/her-majesty-the-queen</a>
          </Typography>
          <Typography>
            <a href="https://www.bbc.co.uk/news/topics/cq23pdgvr7rt">https://www.bbc.co.uk/news/topics/cq23pdgvr7rt</a>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default App;
