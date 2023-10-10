import useCommonDispatch from "./useCommonDispatch";
import { setUserLoginStatus, setUserName, setUserDictionary } from "../../redux/slices/appStoorage";

const useCheckAfterRefresh = () => {

    const dispatch = useCommonDispatch();

    const doCheck = () => {
        if (localStorage.getItem("userName")) {
            const localName = JSON.parse(localStorage.getItem("userName") || "");
            dispatch(setUserLoginStatus(true));
            dispatch(setUserName(localName));
          } 
          if (localStorage.getItem("userDictionary")) {
            const localDictionary = JSON.parse(localStorage.getItem("userDictionary") || '[]');
            dispatch(setUserDictionary(localDictionary));
          };
    }

  return doCheck
}

export default useCheckAfterRefresh;