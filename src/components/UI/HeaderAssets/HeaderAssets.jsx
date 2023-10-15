import React, { useState } from "react";
import styles from "./HeaderAssets.module.scss";
import {
  BasketIcon,
  CloseButton,
  LangEnIcon,
  LangRuIcon,
  LangUzIcon,
  LikeIcon,
  LogoutIcon,
  ProfileIcon,
} from "components/Icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { token, user_first_name } from "services/http-client";
import Modal from "../Modal/Modal";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import { useGetFavouriteCount } from "services/favourites.service";
import { useGetCartProducts } from "services/cart.service";

const langs = [
  {
    key: "ru",
    label: "RUS",
    icon: <LangRuIcon />,
  },
  {
    key: "uz",
    label: "UZB",
    icon: <LangUzIcon />,
  },
  {
    key: "en",
    label: "ENG",
    icon: <LangEnIcon />,
  },
];

const HeaderAssets = () => {
  const router = useRouter();
  const currentLang = langs.find((lang) => router.locale == lang.key);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenClose = () => setOpenModal(false);
  const userId =
    typeof window !== "undefined" && localStorage.getItem("user_id");

  const { data } = useGetFavouriteCount({
    params: userId,
    queryParams: {
      limit: 1,
      offset: 0,
    },
  });

  const { data: CartProducts } = useGetCartProducts({
    queryParams: {
      limit: 1,
      offset: 0,
      user_id: userId,
    },
  });

  const handleLogOut = () => {
    localStorage.clear();
    setOpenModal(false);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <>
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
          <Link href="/favorites">
            <div className={styles.assets__items__item}>
              <LikeIcon />

              {data?.count ? (
                <div className={styles.assets__items__item__count}>
                  {data?.count}
                </div>
              ) : (
                ""
              )}
            </div>
          </Link>
          <Link href="/cart">
            <div className={styles.assets__items__item}>
              <BasketIcon />
              {CartProducts?.count ? (
                <div className={styles.assets__items__item__count}>
                  {CartProducts?.count}
                </div>
              ) : (
                ""
              )}
            </div>
          </Link>
          {token ? (
            <div className={styles.item}>
              <h3 className={styles.first_letter}>
                {user_first_name?.charAt(0).toUpperCase()}
              </h3>
              <div
                className={`${styles.childList} ${styles.childList__profile}`}
              >
                <ul>
                  <Link href={"/myProfile"}>
                    <li className={styles.childItems}>
                      <a>My Profile</a>
                    </li>
                  </Link>
                  <li
                    onClick={() => setOpenModal(true)}
                    className={`${styles.childItems} ${styles.lastChildItem}`}
                  >
                    <a>Log Out</a>
                    <LogoutIcon />
                  </li>
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
      <Modal open={openModal} handleClose={handleOpenClose}>
        <div className={styles.request_wrapper}>
          <span onClick={handleOpenClose} className={styles.closeButton}>
            <CloseButton />
          </span>
          <div className={styles.request_content}>
            <h3 className={styles.request_text}>
              Are you sure to log out your account
            </h3>
            <div className={styles.buttons}>
              <span onClick={handleOpenClose} className={styles.noButton}>
                No
              </span>
              <button onClick={handleLogOut} className={styles.yesButton}>
                Yes
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <DrawerMenu />
    </>
  );
};

export default HeaderAssets;
