import React from "react";
import styles from "./HeaderAssets.module.scss";
import {
  BasketIcon,
  LikeIcon,
  ProfileIcon,
  UzbekLangIcon,
} from "components/Icons";
import Link from "next/link";
import { useRouter } from "next/router";

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
                    {elem.icon}
                    <a>{elem.label} </a>
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
        <div className={styles.assets__items__item}>
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default HeaderAssets;
