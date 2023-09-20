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
import { HamburgerIcon } from "components/Icons";

export default function DrawerMenu() {
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
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
