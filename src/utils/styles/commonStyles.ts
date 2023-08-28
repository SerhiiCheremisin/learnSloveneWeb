import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Button, Stack } from "@mui/material";
import { Typography } from '@mui/material';

export const CommonContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

export const CommonHorizontalContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
})

export const customBackground = {
   backgroundImage: "url('/images/bg.jpg')",
   backgroundRepeat: "no-repeat",
   backgroundAttachment: "fixed",
   backgroundPosition: "center"
}

export const returnBNTLinear = {
   background: "linear-gradient(90deg, rgba(190,196,28,1) 0%, rgba(195,219,132,1) 35%, rgba(42,0,255,1) 100%)",
  }

export const returnBTNSolid = {
   background: "#6E64C6",
   color: "black"
}

export const tableStyles = {
   background: "linear-gradient(90deg, rgba(190,196,28,1) 0%, rgba(195,219,132,1) 35%, rgba(42,0,255,1) 100%)",
   minWidth: 650,
   minHeight: "89vh"
}  

export const tableFontSize = {
   fontSize : "30px"
}
 
export const CommonAlertWrapper = styled(Stack)({
   width: '15%',
   position: "absolute",
   right: 0,
   top: "110px",
})

export const CategoryCard = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    width: "300px",
    height: "350px",
    border: "1px solid black",
    cursor: "pointer",
    transition: ".7s ease",
    letterSpacing: "3px",
    fontSize: "50px",
    backgroundImage: "url('/images/categoryBG.jpg')",
    borderRadius: "5px",
   "&:hover" : {
    boxShadow: "3px 3px 25px 25px rgba(0,0,0,0.75)",
    letterSpacing: "2px",
   }
})

export const SingleWordCard = styled(Box)({
    display: "flex",
    gap: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    width: "300px",
    height: "400px",
    border: "1px solid black",
    cursor: "pointer",
    transition: ".5s ease",
    backgroundImage: "url('/images/cardBG.jpg')",
    "&:hover": {
        boxShadow: "-5px 5px 39px 10px rgba(0,0,0,0.75)",
    }
})

export const CardText = styled(Typography)({
   fontSize: 25,
   textAlign: "center",
})

export const CardTextBold = styled(Typography)({
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
 })

 export const WideButton = styled(Button)({
    width: 200,
    height: 80
 })

 export const SingleConstructorLetter = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 65,
    fontSize: 40,
    cursor: "pointer",
    borderRadius: 15,
    backgroundColor: "#1565C0",
    transition: ".5s ease",
    "&:hover": {
       color: "#FFFFFF",
    }
 })