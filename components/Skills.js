import { Grid, List, Typography } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

import React from "react";
export default function Skills() {
  return (
    <>
      <section id="skills" className=" mb-9">
        <ScrollAnimation
          animateIn="animate__animated animate__bounceInDown"
          animateOut="ananimate__animated animate__bounceInDown"
        >
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
        </ScrollAnimation>
      </section>
    </>
  );
}
