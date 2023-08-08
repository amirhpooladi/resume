import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { Divider } from "@mui/material";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Main() {
  return (
    <>
      <div className="  top-0 bg-slate-800 bg-opacity-90  min-w-full  rounded-3xl">
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
    </>
  );
}
