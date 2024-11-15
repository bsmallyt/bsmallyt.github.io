import express from 'express';

const express = require("express");
const cors = require("cors");

const corsOptions = {
  origin: "https://bsmallyt.github.io/spell_check/spell_check.html",
};

const app = express();
app.use(cors(corsOptions));

const apiUrl = "https://api.itsbensmall.com";

export function spell_check() {
  //const word = document.getElementById("word").value;
  //document.getElementsByID("sug").classList.toggle("show");

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

}