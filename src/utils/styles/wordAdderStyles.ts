import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Button, Stack } from "@mui/material";
import { Typography } from '@mui/material';


export const AddWordBotton = styled(Button)({
   width: 300,
   height: 50,
   marginTop: 15,
}) 

export const ModalAdder = styled(Box)({
  width: 700,
  height:500,
  backgroundColor: "white",
  zIndex: 22,
  position: "absolute",
  top: 250,
  boxShadow: "0px 0px 800px 800px rgba(0,0,0,0.92)",
  padding: 25,
  display: "flex",
  flexDirection: "column",
  })
