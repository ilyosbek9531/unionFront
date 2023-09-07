import { Container } from "@mui/material";
import styles from "./Login.module.scss";
import React from "react";
import LoginContent from "components/UI/LoginContent/LoginContent";

const Login = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.centerContent}>
          <LoginContent />
        </div>
      </div>
    </Container>
  );
};

export default Login;
