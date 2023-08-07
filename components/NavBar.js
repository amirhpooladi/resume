import React from "react";
import { Link } from "react-scroll";
import {
  Button,
  ButtonGroup,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function NavBar() {
  return (
    <>
      <List className=" flex  text-white rounded-lg justify-around lg:flex lg:flex-row  bg-slate-800  px-10    bg-opacity-30 ">
        <ButtonGroup variant="text">
          <div className=" lg:flex lg:flex-row">
            <Link
              to="./home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              <ListItemButton
                selected={false}
                size="small"
                className=" rounded-lg "
              >
                Home
              </ListItemButton>
            </Link>
            <Link
              to="./skills"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              <ListItemButton size="small" className=" rounded-lg ">
                Skills
              </ListItemButton>
            </Link>
            <Link
              to="./contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              <ListItemButton size="small" className=" rounded-lg ">
                Contact
              </ListItemButton>
            </Link>
          </div>
          <div className="lg:flex lg:flex-row">
            <Link
              to="./aboutMe"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              <ListItemButton size="small" className="  rounded-lg ">
                About me
              </ListItemButton>
            </Link>

            <ListItemButton size="small" className=" rounded-lg ">
              Projects
            </ListItemButton>

            <a href="AmirhosseinPooladi_Resume1.pdf" download>
              <ListItemButton
                variant="filled"
                size="small"
                className=" rounded-lg "
              >
                Resume
              </ListItemButton>
            </a>
          </div>
        </ButtonGroup>
      </List>
    </>
  );
}
