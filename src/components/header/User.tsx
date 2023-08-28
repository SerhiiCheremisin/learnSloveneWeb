import { useState, useEffect } from "react";
import { userType, IUserObject, userDataType, ILocalStorageData } from "../../utils/types";
import useGetUserData from "../../services/hooks/useGetUserData";
import useCommonDispatch from "../../services/hooks/useCommonDispatch";
import { Alert, ButtonGroup, Typography } from "@mui/material";
import { CommonHorizontalContainer, CommonContainer, CommonAlertWrapper} from "../../utils/styles/commonStyles";
import { setUserName, setUserLoginStatus, setUserDictionary } from "../../redux/slices/appStoorage";
import { Link } from "react-router-dom";
import { WideButton } from "../../utils/styles/commonStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { sendNewUserToDB, findAlUsersFromDB, findOneUserFromDB } from "../../utils/API";

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
   const location = useLocation();
   useEffect( () =>  {
     setTimeout( () => {
        setIsDataEmpty(false);
     }, 3000)
   },[isDataEmpty] )
   const navigate = useNavigate();

  const userFormHandler = (e:React.ChangeEvent<any>, key: userDataType):void => {
   const value = e.target.value;
   setUserData( {...userData, [key] : value} );
  } 

 const setCustomBG = (url:string):string => {
   if (location.pathname === url) {
     return "gray"
   }
   return ""
  }
 
 const choseTypeOfUser = (type:userType ) :void => {
    setUserType(type);
 }

 const refsreshStateUserData = ():void => {
   findOneUserFromDB(userData.name).then( (user) => {
      localStorage.setItem('userDictionary', JSON.stringify(user.userDictionary));
      dispatch(setUserName(userData.name));
      dispatch(setUserDictionary(user.userDictionary)); 
      localStorage.setItem('userName', JSON.stringify(userData.name));
      dispatch(setUserLoginStatus(true));
      setUserData( { name: "", password: "" } )
   })
 }

 const formHandler = () => {
    if (userData.name.length === 0 || userData.password.length === 0) { 
        setIsDataEmpty(true);
        return;
    }
    if (userType === "new") {
      const newUserData : ILocalStorageData = {
         userName: userData.name,
         userPassword: userData.password,
         userDictionary: []
      }
      findAlUsersFromDB()
      .then( (data) => {
         const check = data.find( (element:any) => element.userName === userData.name );
         if (check) {
            alert(`Такий юзер вже існує, вигадайте унікальніше ім'я`);
            return
         } else {
            sendNewUserToDB(newUserData)
            .then( () => {
               refsreshStateUserData();
            })
         }
         
      })
      return
    }
    if (userType === "old") {
      findAlUsersFromDB()
      .then( (data) => {
         const check = data.find( (element:any) => element.userName === userData.name );
         if (check) {
            const filteredArray =  data.filter( (element:any) => element.userName === userData.name);
            if (filteredArray[0].userPassword === userData.password) {
               refsreshStateUserData();
               return
            }
         }
         alert(`Якіcь данні не збігаються`)
      })
      return
    }
 }

 const logoutHandler = () => {
    dispatch(setUserLoginStatus(false));
    setUserData( {  name: "", password: ""});
    localStorage.removeItem('userName');
    localStorage.removeItem('userDictionary');
    navigate("/");
 }

let errorBordersHandler = isDataEmpty === true ? true : false;

   if (userDetails.isLogged) {
    return (
        <CommonContainer sx={{gap:5}}>
        <Typography sx={{color: "black"}} variant="h3">{`Привіт, ${userDetails.name}`}</Typography>
        <Link to="/user-dictionary"><WideButton sx={[{height:"50px"}, {backgroundColor: setCustomBG('/user-dictionary')}]} variant="contained">Обрані слова</WideButton></Link>
        <WideButton sx={{height:"50px"}} onClick={logoutHandler} variant="contained">Вийти</WideButton>
        </CommonContainer>
       )
   }

   return (
    <>
    <CommonContainer sx={{gap:15}}>
    <CommonContainer>
    <TextField error={errorBordersHandler} id="formName" onChange={(e) => userFormHandler(e, "name")} value={userData.name} label="Логін" variant="outlined" />
    <TextField error={errorBordersHandler} id="formPassword" onChange={(e) => userFormHandler(e, "password")}  value={userData.password} label="Пароль" variant="outlined" />
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