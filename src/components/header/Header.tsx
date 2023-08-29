import { CommonContainer } from '../../utils/styles/commonStyles';
import useGetUserData from '../../services/hooks/useGetUserData';
import User from "./User";
import { Link } from "react-router-dom";
import { WideButton } from '../../utils/styles/commonStyles';
import { CustomHeader } from '../../utils/styles/headerStyles';
import { useLocation } from 'react-router-dom';

const Header = ():JSX.Element => {
 const user = useGetUserData();
 const location = useLocation();

 const customHeight: object = {
  height: "50px"
 } 

const setCustomBG = (url:string):string => {
  if (location.pathname === url) {
    return "green"
  }
  return ""
 }

    return (
     <CustomHeader>
      <CommonContainer sx={{gap: "10px"}}>
       { user.isLogged &&
       <>
        <Link to='/'><WideButton sx={[customHeight, {backgroundColor: setCustomBG('/')}]} variant="contained">Словник</WideButton></Link>
        <Link to='/training'><WideButton sx={[customHeight, {backgroundColor: setCustomBG('/training')}]} variant="contained">Тренування</WideButton></Link>
        <Link to='/grammar'><WideButton sx={[customHeight, {backgroundColor: setCustomBG('/grammar')}]} variant="contained">Граматика</WideButton></Link>
        </>
         }
       </CommonContainer>
      <CommonContainer>
        <User/>
      </CommonContainer>
     </CustomHeader>
  );
}


export default Header;