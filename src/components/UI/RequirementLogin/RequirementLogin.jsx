import React from "react";
import styles from "./RequirementLogin.module.scss";
import Link from "next/link";
import { WarningIcon } from "components/Icons";

const RequirementLogin = ({ warningText, page, contentButton }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon_text}>
        <WarningIcon size="96" fill="red" />
        <h3 className={styles.text}>{warningText}</h3>
      </div>
      <Link href={`/${page}`}>
        <span className={styles.pushLogin}>{contentButton}</span>
      </Link>
    </div>
  );
};

export default RequirementLogin;
