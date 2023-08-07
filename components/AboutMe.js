import React from "react";
import { Typography } from "@mui/material";

export default function AboutMe () {
  return (
    <section id="aboutMe" className=" bg-slate-700  leading-relaxed h-max  ">
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
        className=" leading-8 pb-60 space-y-4 lg:px-40"
        color=" white"
        py={2}
        px={2}
        fontFamily={"cursive"}
      >
        As a computer engineering student and junior programmer interested in
        front-end and web development, I am eager to working in dynamic
        enviroments and I enjoy learning. I am a responsible and diligent person
        in team works and I am always looking for innovative ideas.
      </Typography>
    </section>
  );
}
