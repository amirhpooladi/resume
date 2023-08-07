import React, { useState } from "react";

import {
  Avatar,
  Button,
  Divider,
  Grid,
  List,
  ListItemText,
  Typography,
  makeStyles,
} from "@mui/material";
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
      
        <section id="header" className=" flex justify-between mt-5" >
          <Grid container spacing={2} py={1}>
            <Grid item>
              <Avatar src="me.jpg" className=" ml-3" />
            </Grid>
            <Grid item>
              <Typography variant="h6"  className=" flex flex-col lg:flex-row ml-3">
                <span className=" text-white mr-2"> Amirhossein </span>
                <span className=" text-green-600"> Pooladi </span>
              </Typography>
            </Grid>
          </Grid>

          <Grid item py={1}>
            <Button onClick={iconHandler}>
              {icon ? (
                <div>
                  <MenuRoundedIcon className=" text-green-600 " />
                </div>
              ) : (
                <CloseIcon className=" text-green-600 " />
              )}
            </Button>
          </Grid>
        </section>
      
        {!icon && <NavBar />}
      
    </>
  );
}
