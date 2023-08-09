import { CustomLink, CustomHeader } from '../../utils/styles/headerStyles';
import { CommonContainer } from '../../utils/styles/commonStyles';
import useGetUserData from '../../services/hooks/useGetUserData';
import User from "./User";
import { Link } from "react-router-dom";

const Header = ():JSX.Element => {
 const user = useGetUserData();

    return (
     <CustomHeader>
      <CommonContainer sx={{gap: "10px"}}>
       { user.isLogged &&
       <>
        <Link to='/'><CustomLink>Словник</CustomLink></Link>
        <Link to='/training'><CustomLink>Тренування</CustomLink></Link>
        <Link to='/grammar'><CustomLink>Граматика</CustomLink></Link>
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