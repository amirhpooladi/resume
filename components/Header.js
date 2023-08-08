import React, { useState } from "react";
import 'animate.css';

import { Avatar, Button, Grid, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import NavBar from "./NavBar";

export default function Header() {
  const [icon, setIcon] = useState(true);
  const iconHandler = () => {
    setIcon((i) => !i);
  };

  return (
    <>
      <section id="header" className=" flex justify-between mt-5 mb-16">
        <Grid container spacing={2} py={1} >
          <Grid item>
            <Avatar src="./me.jpg" className=" ml-3 transition  ease-in-out delay-150 hover:scale-150 duration-200" />
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              className=" flex flex-col lg:flex-row ml-3"
            >
              <span className=" text-white mr-2"> Amirhossein </span>
              <span className=" text-green-600"> Pooladi </span>
            </Typography>
          </Grid>
        </Grid>

        <Grid item py={1}>
          <Button onClick={iconHandler}>
            {icon ? (
              <div>
                <MenuRoundedIcon className="   text-green-600 transition  ease-in-out delay-150 hover:-translate-x-2 hover:scale-150 duration-200 " />
              </div>
            ) : (
              <CloseIcon className=" text-green-600 transition  ease-in-out delay-150 hover:-translate-x-2 hover:scale-150 duration-200 " />
            )}
          </Button>
        </Grid>
      </section>

      {!icon && <NavBar />}
    </>
  );
}
