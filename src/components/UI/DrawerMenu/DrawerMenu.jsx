import * as React from "react";
import styles from "./DrawerMenu.module.scss";
import Box from "@mui/material/Box";
import { useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import SwipeableDrawerModal from "../SwipeableDrawerModal/SwipeableDrawerModal";
import {
  BasketIcon,
  HamburgerIcon,
  LikeIcon,
  LogoutIcon,
  ProfileIcon,
  UzbekLangIcon,
} from "components/Icons";
import { menuItemsMobil } from "utils/menuItems";
import Link from "next/link";
import { useRouter } from "next/router";
import MainButton from "../MainButton/MainButton";

const langs = [
  {
    key: "ru",
    label: "RUS",
    icon: <ProfileIcon />,
  },
  {
    key: "uz",
    label: "UZB",
    icon: <ProfileIcon />,
  },
  {
    key: "en",
    label: "ENG",
    icon: <ProfileIcon />,
  },
];

export default function DrawerMenu() {
  const router = useRouter();
  const [openBar, setOpenBar] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenBar(open);
  };

  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItemsMobil.map((item) => (
          <Link href={item.link}>
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <ListItemText primary={item.label || ""} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <div className={styles.langs}>
        {langs.map((elem) => (
          <Link href={router.asPath} locale={elem.key} replace={true}>
            <li key={elem?.label} className={styles.lang}>
              <a>{elem.label} </a>
              {elem.icon}
            </li>
          </Link>
        ))}
      </div>
      <Divider />
      <List>
        {[
          { icon: <LikeIcon />, text: "Favourites", link: "/favorites" },
          { icon: <BasketIcon />, text: "Basket", link: "/cart" },
        ].map((item) => (
          <ListItem key={item.link} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={
                  <div className={styles.drawerItem}>
                    {item.icon} {item.text}
                  </div>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <MainButton
        variant="outlined"
        text={
          typeof window !== "undefined" && localStorage.getItem("token")
            ? "Log out"
            : "Login"
        }
        fullWidth
      />
    </Box>
  );

  return (
    <>
      <div onClick={toggleDrawer(true)} className={styles.hamburger}>
        <HamburgerIcon />
      </div>
      <SwipeableDrawerModal
        open={openBar}
        onClose={() => setOpenBar(false)}
        onOpen={() => setOpenBar(true)}
      >
        {list()}
      </SwipeableDrawerModal>
    </>
  );
}
