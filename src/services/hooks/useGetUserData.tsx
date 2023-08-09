import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../redux/store";

interface IUserData {
    name: string;
    isLogged: boolean
}

const useGetUserData = ():IUserData => {
    const userName = useSelector((state:RootState) => state.appStoorage.userName);
    const isUserLogged = useSelector( (state:RootState) => state.appStoorage.isUserLogged);

    const userData: IUserData = {
        name: userName,
        isLogged : isUserLogged
    }
  return userData
  
}

export default useGetUserData;

