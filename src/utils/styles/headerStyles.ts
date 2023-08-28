import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import { styled } from "@mui/system";

  export const CustomHeader = styled(AppBar)({
   position: "relative",
   flexDirection: "row",
   height: "100px",
   display: "flex",
   alignItems: "center",
   justifyContent: "space-between",
   gap: "25px",
   padding: "0px 25px",
   backgroundImage: "url('/images/categoryBG.jpg')",
  })
