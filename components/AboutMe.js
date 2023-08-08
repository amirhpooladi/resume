import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"

export default function AboutMe() {
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
    
    <section id="aboutMe" className=" bg-slate-700  leading-relaxed h-max  ">
      <div data-aos="fade-down">
        <Typography
          className=" leading-relaxed pt"
          color="white"
          variant="h5"
          py={3}
          px={3}
          fontFamily={"cursive"}
        >
          About <span className=" text-green-600"> Me</span>{" "}
        </Typography>

        <Typography
          className=" leading-8 pb-60 space-y-4 lg:px-40 transition will-change-scroll"
          color=" white"
          py={2}
          px={2}
        >
          As a junior programmer interested in front-end and web development, I
          am eager to working in dynamic enviroments and I enjoy learning. I am
          a responsible and diligent person in team works and I am always
          looking for innovative ideas.
        </Typography>
        </div>
    </section>
   
  );
}
