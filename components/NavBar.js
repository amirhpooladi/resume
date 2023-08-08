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
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

export default function NavBar() {
  return (
    <>
      <ScrollAnimation
        
        animateIn="animate__animated animate__bounceInDown"
        animateOut="ananimate__animated animate__bounceInDown"
      >
        <List className="  flex  text-white rounded-lg justify-around lg:flex lg:flex-row   bg-slate-800  px-10    bg-opacity-30 ">
          <ButtonGroup variant="text">
            <div className=" lg:flex lg:flex-row md:flex md:flex-row">
              <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                <ListItemButton
                  selected={false}
                  size="small"
                  className=" text-green-600 rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600"
                >
                  Home
                </ListItemButton>
              </Link>
              <Link
                to="skills"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                <ListItemButton
                  size="small"
                  className=" rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600 "
                >
                  Skills
                </ListItemButton>
              </Link>
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                <ListItemButton
                  size="small"
                  className=" rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600 "
                >
                  Contact
                </ListItemButton>
              </Link>
            </div>
            <div className="lg:flex lg:flex-row md:flex md:flex-row">
              <Link
                to="aboutMe"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                <ListItemButton
                  size="small"
                  className="  rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600  "
                >
                  About me
                </ListItemButton>
              </Link>
              <a href="https://github.com/amirhpooladi" target="_blank">
                <ListItemButton
                  size="small"
                  className=" rounded-lg transition ease-linear hover:text-green-600  delay-150 hover:scale-125 duration-200 "
                >
                  Projects
                </ListItemButton>
              </a>

              <a href="AmirhosseinPooladi_Resume1.pdf" download>
                <ListItemButton
                  variant="filled"
                  size="small"
                  className=" rounded-lg transition  ease-in-out delay-150 hover:scale-125 duration-200 hover:text-green-600"
                >
                  Resume
                </ListItemButton>
              </a>
            </div>
          </ButtonGroup>
        </List>
      </ScrollAnimation>
    </>
  );
}
