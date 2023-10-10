import { CommonContainer } from '../../utils/styles/commonStyles';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { setAppLanguage } from '../../redux/slices/appStoorage';
import { appLanguage } from '../../utils/types';

import useGetUserData from '../../services/hooks/useGetUserData';
import useGetAppLanguage from '../../services/hooks/useGetAppLanguage';
import useCommonDispatch from '../../services/hooks/useCommonDispatch';

import { WideButton } from '../../utils/styles/commonStyles';
import { CustomHeader } from '../../utils/styles/headerStyles';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import User from "./User";

const Header = ():JSX.Element => {
 const user = useGetUserData();
 const location = useLocation();
 const appLanguageValue = useGetAppLanguage();
 const dispatch = useCommonDispatch();

 const customHeight: object = {
  height: "50px"
 } 

const setCustomBG = (url:string):string => {
  if (location.pathname === url) {
    return "green"
  }
  return ""
 }

 const languageHandler = (lang:appLanguage):void => {
   dispatch(setAppLanguage(lang));
 }

    return (
     <CustomHeader sx={{position:"sticky", top: 0}}>
      <CommonContainer sx={{gap: "10px"}}>
       { user.isLogged &&
       <>
        <Link to='/'><WideButton sx={[customHeight, {backgroundColor: setCustomBG('/')}]} 
                                 variant="contained">{appLanguageValue === "UA" ? "Словник" : "Dictionary"}</WideButton></Link>
        <Link to='/training'><WideButton sx={[customHeight, {backgroundColor: setCustomBG('/training')}]} 
                                         variant="contained">{appLanguageValue === "UA" ? "Тренування" : "Training"}</WideButton></Link>
        <Link to='/grammar'><WideButton sx={[customHeight, {backgroundColor: setCustomBG('/grammar')}]} 
                                        variant="contained">{appLanguageValue === "UA" ? "Граматика" : "Grammar"}</WideButton></Link>
        </>
         }
       </CommonContainer>
      <CommonContainer>
        <User/>
      </CommonContainer>
      <ToggleButtonGroup
           color="primary"
           sx={{backgroundColor: "white", borderRadius: 15}}
           exclusive
           value={appLanguageValue}
           aria-label="Languages"
         >
           <ToggleButton sx={{width: 50, height: 50, borderRadius: 15}} onClick={() => languageHandler("UA")} value="UA">UA</ToggleButton>
           <ToggleButton sx={{width: 50, height: 50, borderRadius: 15}} onClick={() => languageHandler("ENG")} value="ENG">ENG</ToggleButton>
         </ToggleButtonGroup>
     </CustomHeader>
  );
}

export default Header;