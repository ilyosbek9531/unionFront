import React from "react";
import styles from "./RequirementLogin.module.scss";
import Link from "next/link";
import { WarningIcon } from "components/Icons";

const RequirementLogin = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon_text}>
        <WarningIcon size="96" fill="red" />
        <h3 className={styles.text}>Please login from website</h3>
      </div>
      <Link href="/login">
        <span className={styles.pushLogin}>Go to login</span>
      </Link>
    </div>
  );
};

export default RequirementLogin;
