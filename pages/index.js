import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { Divider, Typography } from "@mui/material";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import "aos/dist/aos.css"
import "animate.css";
import "animate.css";
import AOS from "aos"

export default function Main() {
  useEffect(()=>{
    AOS.init({
      offset:200,
      duration:600,
      easing:"ease-in-out",
      delay:100
    });
    AOS.refresh()
  },[])
  const startPage = (
    
    <div id="startPage" className="animate__animated animate__lightSpeedInRight  flex justify-center mt-48   ">
    
      <Typography variant="body1" color="white" >
      Welcome To
      <span className=" text-green-600"> AmirHossein Pooladi </span>
        Website

      </Typography>
      </div>
  
  );
  const mainPage = (
    <div  className="animate__animated animate__fadeInDown ">
      <div className="  top-0 bg-slate-800 bg-opacity-90 rounded-3xl">
        <Header />
      </div>
      <Layout>
        <Home />

        <Divider color="primary" className=" my-5" />
        <AboutMe />
        <Divider color="primary" className=" my-5" />
        <Skills />
        <Divider color="primary" className=" my-5" />
        <Contact />
      </Layout>
      
    </div>
  );
  const [page, setPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPage(true);
    }, 3100);
  }, []);

  return <>{page ? mainPage : startPage}</>;
}
