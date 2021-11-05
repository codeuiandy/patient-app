import React from "react";
import { NotificationManager } from "react-notifications";

const Validatepassword = (password) => {
  let lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  if (
    !password.match(lowerCaseLetters) ||
    !password.match(upperCaseLetters) ||
    !password.match(numbers) ||
    password.length < 7
  ) {
    NotificationManager.error(
      "Invalid password, password must contain,uppercase,lowercase and greater than 8 caracters"
    );
    return false;
  }
  return true;
};

export default Validatepassword;
