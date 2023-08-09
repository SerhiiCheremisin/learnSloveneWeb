import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";

const useCommonDispatch = () => {

  const commonDispatch:AppDispatch = useDispatch();

    return commonDispatch
  }
  
  
  export default useCommonDispatch;