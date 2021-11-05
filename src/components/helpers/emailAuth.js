import React from "react";
import { NotificationManager } from "react-notifications";

export default function EmailAuth(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(String(email).toLowerCase()) == false) {
    NotificationManager.error("Invalid email format");
    return false;
  } else {
    return true;
  }
}
