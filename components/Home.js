import React from "react";
import { Button, Typography, TextField } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

export default function Home() {
  return (
    <>
      <section id="home">
        <Typography variant="h5" color="white" py={3}>
          Hello,
          <span className=" text-green-600"> Im Amirhossein Pooladi </span>
          Front-End Developer
        </Typography>
        <Typography variant="body1" color="white" py={2}>
          With knowledge in web development and design, I offer you greatest
          quality of work with finest resault.
        </Typography>
        <ScrollAnimation
          animateIn="animate__animated animate__backInRight"
          animateOut="ananimate__animated animate__bounceInDown"
        >
          <div className=" my-20">
            <a href="https://github.com/amirhpooladi" target="_blank">
              <Button className=" hover: bg-slate-700 mr-2 animate-pulse ">
                <GitHubIcon color=" text-green-600" className=" text-3xl m-3" />
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/amirhossein-pooladi-6b4679277/"
              target="_blank"
            >
              <Button className=" hover: bg-slate-700 mr-2 animate-pulse">
                <LinkedInIcon
                  color=" text-green-600"
                  className=" text-3xl m-3"
                />
              </Button>
            </a>

            <a href="AmirhosseinPooladi_Resume1.pdf" download>
              <Button className=" hover: bg-slate-700 mr-2  ">
                <svg className="animate-bounce w-14 h-14">
                  <FileDownloadIcon
                    color=" text-green-600"
                    className=" text-3xl m-3 "
                  />
                </svg>
                <span className=" text-green-600">resume</span>
              </Button>
            </a>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
}
