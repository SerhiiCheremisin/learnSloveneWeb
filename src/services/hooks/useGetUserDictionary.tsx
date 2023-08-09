import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../redux/store";
import { IRootDictionary } from "../../utils/types";

interface IUserDictionary {
    userDictionary: IRootDictionary[];
}

const useGetUserDictionary = ():IUserDictionary => {
    const userDictionary = useSelector((state:RootState) => state.appStoorage.userDictionary);
    return {
        userDictionary : userDictionary
    }
}

export default useGetUserDictionary;