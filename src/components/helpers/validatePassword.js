import { NotificationManager } from "react-notifications";

const Validatepassword = (password) => {
  let lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  if (
    !password.match(lowerCaseLetters) ||
    !password.match(upperCaseLetters) ||
    !password.match(numbers) ||
    password.length < 7
  ) {
    NotificationManager.error(
      "Invalid password, password must contain,uppercase,lowercase and greater than 8 characters"
    );
    return false;
  }
  return true;
};

export default Validatepassword;
