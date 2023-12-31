import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Button } from "@mui/material";
import { Link } from "react-scroll";
import "aos/dist/aos.css"
import "animate.css";
import AOS from "aos"

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    AOS.init({
      offset:200,
      duration:600,
      easing:"ease-in-out",
      delay:100
    });
    AOS.refresh()
  },[])
  const [scrollToTop, setScrollToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 300 ? setScrollToTop(true) : setScrollToTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
const handleScrollToTop=()=>{
  window.scrollTo({top:0,behavior:"smooth"})
}
  return (
    <Layout>
      <Component {...pageProps} />

      {scrollToTop ? (
        <Link className=" hover:text-3xl"
          to="header"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
        >
          <Button onClick={handleScrollToTop}>
            <ArrowCircleUpIcon
              fontSize="large"
              className=" fixed bottom-10 font-extrabold  text-green-600"
            />
          </Button>
        </Link>
      ) : (
        ""
      )}
    </Layout>
  );
}

export default MyApp;
