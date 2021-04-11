#!/usr/bin/env node

const inquirer = require("inquirer");

function errorHandler() {
  console.log("You did not enter a numeric value. Please try again next time!");
  process.exit();
}

inquirer
  .prompt([
    {
      name: "input",
      type: "number",
      message:
        "Welcome, please enter the current temperature in degrees Celsius (°C)",
    },
  ])
  .then((answer) => {
    if (!Number.isNaN(answer.input)) {
      const celsius = answer.input;
      const fahrenheit = celsius * 1.8 + 32;
      const kelvin = celsius + 273.15;
      console.log(
        `It is currently ${fahrenheit} degrees Fahrenheit, and ${kelvin} degrees Kelvin.`
      );
    } else {
      errorHandler();
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      errorHandler();
    }
  });
