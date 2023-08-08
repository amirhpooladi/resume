import { Button, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

export default function Contact() {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [comError, setComError] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const comRef = useRef(null);
  const helperText = "Incorrect entry.";

  const submitHandler = (event) => {
    console.log(nameRef.current.value);
    if (nameRef.current.value.trim() === "") {
      setNameError(true);
    }
    if (
      emailRef.current.value.trim() === "" ||
      !emailRef.current.value.includes("@")
    ) {
      setEmailError(true);
    }
    if (comRef.current.value.trim() === "") {
      setComError(true);
    }
  };

  return (
    
    <section id="contact" className="flex flex-col items-center pt-12">
    <ScrollAnimation
    animateIn="animate__animated animate__bounceInDown"
    animateOut="ananimate__animated animate__bounceInDown"
  >
      <Typography variant="h5" color="white" fontWeight="bold">
        Get In <span className=" text-green-600"> Touch</span>
      </Typography>
      <Typography
        variant="h5"
        color="white"
        fontWeight="bold"
        className=" pb-8 pt-3"
      >
        Contact Me
      </Typography>
      <form 
        type="submit"
        className=" text-white flex flex-col bg-stone-200 p-20 rounded-3xl "
      >
        <TextField
          onChange={() => setNameError(false)}
          helperText={nameError && helperText}
          inputRef={nameRef}
          type="text"
          error={nameError}
          required
          placeholder="Enter your name"
          label="Name"
          color="success"
        />
        <TextField
          onChange={() => setEmailError(false)}
          helperText={emailError && helperText}
          inputRef={emailRef}
          type="text"
          error={emailError}
          required
          placeholder="Enter your email"
          color="success"
          label="Email"
          className="mt-4"
        />
        <TextField
          className="mt-4  placeholder-white"
          onChange={() => setComError(false)}
          helperText={comError && helperText}
          inputRef={comRef}
          type="text"
          multiline
          error={comError}
          required
          placeholder="All your comments will be read and even published:)"
          color="success"
          label="comments"
        />

        <Button
          onClick={submitHandler}
          className=" bg-green-600 hover:bg-orange-500 mt-10 mb-20"
          variant="contained"
        >
          Submit
        </Button>
      </form>
      <Typography
        color="white"
        className=" sticky bottom-0w-max flex justify-center rounded-full mb-4 mt-5"
      >
        Developed By Amirhossein Pooladi
      </Typography>
      </ScrollAnimation>
    </section>
    
  );
}
