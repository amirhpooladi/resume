import React, { useEffect } from "react";
import { Grid, List, Typography } from "@mui/material";
import AOS from "aos"
import "aos/dist/aos.css"
import "animate.css";


export default function Skills() {

useEffect(()=>{
  AOS.init({
    offset:200,
    duration:600,
    easing:"ease-in-out",
    delay:100
  });
  AOS.refresh()
},[])

  return (
    <>
      <section id="skills" className=" mb-9">
        <div data-aos="zoom-in">
          <List>
            <Typography color="white" fontWeight="bold" variant="h5" pt={8}>
              My <span className=" text-green-600"> Skills</span>{" "}
            </Typography>
            <Typography color="white" pt={3}>
              see fully what skills I have and perform, to develop the projects
              for you.
            </Typography>
            <Grid container pt={3}>
              <Grid item xs={6} pt={2}>
                <Typography variant="h6" color="white" className=" font-bold">
                  HTML&CSS
                </Typography>
              </Grid>
              <Grid item xs={6} pt={2}>
                <Typography variant="h6" color="white" className=" font-bold">
                  <span className=" text-green-600">JAVASCRIPT</span>
                </Typography>
              </Grid>
              <Grid item xs={6} pt={2}>
                <Typography variant="h6" color="white" className=" font-bold">
                  <span className=" text-green-600">REACT.JS</span>
                </Typography>
              </Grid>
              <Grid item xs={6} pt={2}>
                <Typography variant="h6" color="white" className=" font-bold">
                  NEXT.JS
                </Typography>
              </Grid>
              <Grid item xs={6} pt={2}>
                <Typography variant="h6" color="white" className=" font-bold">
                  GIT&GITHUB
                </Typography>
              </Grid>
              <Grid item xs={6} pt={2}>
                <Typography variant="h6" color="white" className=" font-bold">
                  <span className=" text-green-600"> TAILWINDCSS</span>
                </Typography>
              </Grid>
              <Grid item xs={6} pt={2}>
                <Typography variant="h6" color="white" className=" font-bold">
                  <span className=" text-green-600"> MUI</span>
                </Typography>
              </Grid>
              <Grid item xs={6} pt={2}>
                <Typography variant="h6" color="white" className=" font-bold">
                  SASS
                </Typography>
              </Grid>
            </Grid>
          </List>
        </div>
      </section>
    </>
  );
}
