import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import { styled } from "@mui/system";

export const CustomLink = styled(Link)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width:"150px",
    height:"40px",
    fontSize: 20,
    backgroundColor: "black",
    borderRadius: "25px",
    color: "#ffffff",
    transition: ".5s ease",
    transform: "scale(1)",
    cursor: "pointer",
    "&:hover" : {
      transform: "scale(1.1)"
    }
  }) 

  export const CustomHeader = styled(AppBar)({
   flexDirection: "row",
   height: "100px",
   display: "flex",
   alignItems: "center",
   justifyContent: "space-between",
   gap: "25px",
   padding: "0px 25px",
   backgroundColor: "#aba9a7",
   position: "relative"
  })
