import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AOS from "aos"
import "aos/dist/aos.css"
import "animate.css";
export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);
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
        <div data-aos="zoom-in-down">
          <div className=" my-20">
            <a href="https://github.com/amirhpooladi" target="_blank">
              <Button className=" hover: bg-slate-700 mr-2   ">
                <GitHubIcon
                  color=" text-green-600"
                  className=" text-3xl m-3 animate__animated animate__heartBeat animate__infinite "
                />
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/amirhossein-pooladi-6b4679277/"
              target="_blank"
            >
              <Button className=" hover: bg-slate-700 mr-2 ">
                <LinkedInIcon
                  color=" text-green-600"
                  className=" text-3xl m-3 animate__animated animate__heartBeat animate__infinite "
                />
              </Button>
            </a>

            <a href="AmirhosseinPooladi_Resume1.pdf" download>
              <Button className=" hover: bg-slate-700 mr-2  ">
                <FileDownloadIcon
                  color=" text-green-600"
                  className=" text-3xl m-3 animate__animated animate__bounce animate__infinite animate__slow"
                />

                <span className=" text-green-600">resume</span>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
