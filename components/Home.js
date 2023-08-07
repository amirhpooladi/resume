import React from "react";
import { Button, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Header from "./Header";

export default function Home() {
  return (
    <>
    
    <section id="home" className=" ">
    
      <Typography variant="h5" color="white" py={3}>
        Hello,
        <span className=" text-green-600"> I'm Amirhossein Pooladi </span>
        Front-End Developer
      </Typography>
      <Typography variant="body1" color="white" py={2}>
        With knowledge in web development and design, I offer you greatest
        quality of work with finest resault.
      </Typography>
      <div>
      <a href="https://github.com/amirhpooladi" target="_blank">
        <Button  className=" hover: bg-slate-700 mr-2 ">
          <GitHubIcon color=" text-green-600" className=" text-3xl m-3" />
        </Button>
        </a>
        <a href="https://www.linkedin.com/in/amirhossein-pooladi-6b4679277/" target="_blank">
        <Button  className=" hover: bg-slate-700 mr-2">
          <LinkedInIcon color=" text-green-600" className=" text-3xl m-3" />
        </Button>
        </a>
       
        <a href="AmirhosseinPooladi_Resume1.pdf" download>
        
        <Button  className=" hover: bg-slate-700 mr-2">
       
          <FileDownloadIcon color=" text-green-600" className=" text-3xl m-3" />
        </Button>
        </a>
      </div>
      </section>
    </>
  );
}
