import React from "react";
import styles from "./ShowAlert.module.scss";
import Alert from "@mui/material/Alert";

const ShowAlert = ({ severity, children }) => {
  return (
    <Alert variant="filled" severity={severity}>
      {children}
    </Alert>
  );
};

export default ShowAlert;
