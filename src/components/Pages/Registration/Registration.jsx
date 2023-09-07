import React from "react";
import styles from "./Registration.module.scss";
import RegistrationContent from "components/UI/RegistrationConetent/RegistrationContent";
import { Container } from "@mui/material";

const Registration = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <RegistrationContent />
      </div>
    </Container>
  );
};

export default Registration;
