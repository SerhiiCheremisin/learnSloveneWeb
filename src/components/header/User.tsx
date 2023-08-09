import { useState, useEffect } from "react";
import { userType, IUserObject, userDataType } from "../../utils/types";
import useGetUserData from "../../services/hooks/useGetUserData";
import useCommonDispatch from "../../services/hooks/useCommonDispatch";
import { Alert, ButtonGroup, Typography } from "@mui/material";
import { CommonHorizontalContainer, CommonContainer, CommonAlertWrapper} from "../../utils/styles/commonStyles";
import { CustomLink } from "../../utils/styles/headerStyles";
import { setUserName, setUserLoginStatus } from "../../redux/slices/appStoorage";
import { Link } from "react-router-dom";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const User = ():JSX.Element => {
   const userDetails = useGetUserData(); 
   const dispatch = useCommonDispatch();
   const [userType, setUserType] = useState<userType>("new");
   const buttonActionType = userType === "new" ? "Зареєструватися" : "Увійти";
   const [userData, setUserData] = useState<IUserObject> ( {
    name: "",
    password: ""
   });
   const [isDataEmpty, setIsDataEmpty] = useState<boolean>(false);
   const isNewUser = userType === "new" ? true : false;

   useEffect( () =>  {
     setTimeout( () => {
        setIsDataEmpty(false);
     }, 3000)
   },[isDataEmpty] )

  const userFormHandler = (e:React.ChangeEvent<any>, key: userDataType):void => {
   const value = e.target.value;
   setUserData( {...userData, [key] : value} );
  } 
 
 const choseTypeOfUser = (type:userType ) :void => {
    setUserType(type);
 }

 const formHandler = () => {
    if (userData.name.length === 0 || userData.password.length === 0) { 
        setIsDataEmpty(true);
        return;
    }
    dispatch(setUserName(userData.name));
    dispatch(setUserLoginStatus(true));
    setUserData( {  name: "", password: ""} )
 }

 const logoutHandler = () => {
    dispatch(setUserLoginStatus(false));
    setUserData( {  name: "", password: ""} )
 }

let errorBordersHandler = isDataEmpty === true ? true : false;

   if (userDetails.isLogged) {
    return (
        <CommonContainer sx={{gap:5}}>
        <Typography variant="h3">{`Привіт, ${userDetails.name}`}</Typography>
        <Link to="/user-dictionary"><CustomLink>Обрані слова</CustomLink></Link>
        <Button onClick={logoutHandler} variant="contained">Вийти</Button>
        </CommonContainer>
       )
   }

   return (
    <>
    <CommonContainer sx={{gap:15}}>
    <CommonContainer>
    <TextField error={errorBordersHandler} id="formName" onChange={(e) => userFormHandler(e, "name")} value={userData.name} label="Логін" variant="outlined" />
    <TextField error={errorBordersHandler} id="formPassword"  onChange={(e) => userFormHandler(e, "password")}  value={userData.password} label="Пароль" variant="outlined" />
    </CommonContainer>
    <CommonHorizontalContainer sx={{gap:2}}>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={() => choseTypeOfUser("new")} disabled={isNewUser}>Новий користувач</Button>
      <Button onClick={() => choseTypeOfUser("old")} disabled={!isNewUser}>Вже є аккаунт</Button>
    </ButtonGroup>
    <Button onClick={formHandler} variant="contained">{`${buttonActionType}`}</Button>
    </CommonHorizontalContainer>
   </CommonContainer>
    {isDataEmpty &&  
        <CommonAlertWrapper>
        <Alert severity="warning">{`Всі поля мають бути заповнені`}</Alert>
        </CommonAlertWrapper>}
    </>
   )

}


export default User;