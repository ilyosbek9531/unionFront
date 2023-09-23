import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const drawerBleeding = 56;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

export default function SwipeableDrawerModal({
  open,
  onClose,
  onOpen,
  children,
  window,
}) {
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Global
        styles={{
          "& .MuiModal-root.MuiDrawer-root": {
            zIndex: "9999 !important",
          },
          "&.MuiDrawer-root >  &.MuiPaper-root": {
            overflow: "visible",
            borderRadius: "12px",
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={onClose}
        onOpen={onOpen}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={true}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox>
          <Puller />
        </StyledBox>
        <StyledBox
          sx={{
            pt: 1,
            pb: 3,
            px: 2,
            mt: "20px",
            height: "100%",
            overflow: "auto",
            top: -drawerBleeding,
          }}
        >
          {children}
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
}
