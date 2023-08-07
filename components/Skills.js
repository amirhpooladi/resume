import { Grid, List, Typography } from "@mui/material";
import React from "react";
export default function Skills () {
  return (
    <>
      <section id="skills">
        <List>
          <Typography color="white" variant="h5" pt={8}>
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
                JAVASCRIPT
              </Typography>
            </Grid>
            <Grid item xs={6} pt={2}>
              <Typography variant="h6" color="white" className=" font-bold">
                REACT.JS
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
                TAILWINDCSS
              </Typography>
            </Grid>
            <Grid item xs={6} pt={2}>
              <Typography variant="h6" color="white" className=" font-bold">
                MUI
              </Typography>
            </Grid>
            <Grid item xs={6} pt={2}>
              <Typography variant="h6" color="white" className=" font-bold">
                SASS
              </Typography>
            </Grid>
          </Grid>
        </List>
      </section>
    </>
  );
}
