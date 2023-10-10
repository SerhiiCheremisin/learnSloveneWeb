import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../redux/store";


const useGetAppLanguage = () => {
 const appLanguage = useSelector((state:RootState) => state.appStoorage.appLang);
 
 return appLanguage

}

export default useGetAppLanguage;