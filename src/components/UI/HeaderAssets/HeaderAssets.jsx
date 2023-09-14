import React, { useState } from "react";
import styles from "./HeaderAssets.module.scss";
import {
  BasketIcon,
  LikeIcon,
  LogoutIcon,
  ProfileIcon,
  UzbekLangIcon,
} from "components/Icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { token, user_first_name } from "services/http-client";

const langs = [
  {
    key: "ru",
    label: "RUS",
    icon: <UzbekLangIcon />,
  },
  {
    key: "uz",
    label: "UZB",
    icon: <UzbekLangIcon />,
  },
  {
    key: "en",
    label: "ENG",
    icon: <UzbekLangIcon />,
  },
];

const profilePages = [
  {
    key: "myProfile",
    label: "My Profile",
  },

  {
    key: "logout",
    label: "Log Out ",
    icon: <LogoutIcon />,
  },
];

const HeaderAssets = () => {
  const router = useRouter();
  const currentLang = langs.find((lang) => router.locale == lang.key);
  return (
    <div className={styles.assets}>
      <li className={styles.item}>
        {currentLang.icon} <span>{currentLang.label}</span>
        <div className={styles.childList}>
          <ul>
            {langs.map((elem) => (
              <Link href={router.asPath} locale={elem.key} replace={true}>
                <li key={elem?.label} className={styles.childItems}>
                  <>
                    <a>{elem.label} </a>
                    {elem.icon}
                  </>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </li>
      <div className={styles.assets__items}>
        <div className={styles.assets__items__item}>
          <LikeIcon />
          <div className={styles.assets__items__item__count}>2</div>
        </div>
        <div className={styles.assets__items__item}>
          <BasketIcon />
          <div className={styles.assets__items__item__count}>76</div>
        </div>
        {token ? (
          <div className={styles.item}>
            <h3 className={styles.first_letter}>
              {user_first_name.charAt(0).toUpperCase()}
            </h3>
            <div className={styles.childList}>
              <ul>
                {profilePages.map((elem) => (
                  <Link href={router.asPath} locale={elem.key} replace={true}>
                    <li key={elem?.label} className={styles.childItems}>
                      <>
                        <a>{elem.label} </a>
                        {elem.icon}
                      </>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <Link href="/login">
            <div className={styles.assets__items__item}>
              <ProfileIcon />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderAssets;
