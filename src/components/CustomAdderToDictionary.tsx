import React, { useEffect, useState } from 'react';
import { IRootDictionary } from '../utils/types';
import { setUserDictionary } from '../redux/slices/appStoorage';
import Button from '@mui/material/Button';
import { addWordToDictionatyToDB } from '../utils/API';

import useGetUserDictionary from '../services/hooks/useGetUserDictionary';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import useGetUserData from '../services/hooks/useGetUserData';

interface ICustomAdderToDictionaryProps {
   singleWord: IRootDictionary
}
type commandsType = "add" | "delete";

const CustomAdderToDictionary = ( { singleWord } :ICustomAdderToDictionaryProps ):JSX.Element => {
  const [isInDictionary, setIsInDictionary] = useState<boolean>(false);
  const dictionary = useGetUserDictionary();
  const user = useGetUserData();
  const dispatch = useCommonDispatch();

   useEffect( () => {
    dictionary.userDictionary.map( (word : IRootDictionary) => {
        if (singleWord.sloWord === word.sloWord) {
            setIsInDictionary(true);
        }
    })
   })

  const wordAdderHandler = (command: commandsType):void => {
     if (command === "add") {
       addWordToDictionatyToDB( [...dictionary.userDictionary, singleWord], user.name).then( () =>{
         setIsInDictionary(true);
         dispatch(setUserDictionary([...dictionary.userDictionary, singleWord]));
         localStorage.setItem( "userDictionary", JSON.stringify([...dictionary.userDictionary, singleWord]));
       })
        return
     }
     const filteredDictionary = [...dictionary.userDictionary].filter( (word: IRootDictionary) => {
        return word.sloWord !== singleWord.sloWord;
     })
     addWordToDictionatyToDB( filteredDictionary , user.name).then( () => {
      dispatch(setUserDictionary(filteredDictionary));
      localStorage.setItem( "userDictionary", JSON.stringify(filteredDictionary));
      setIsInDictionary(false);
     })
     return
  }

    if (isInDictionary) {
        return <Button onClick={() => wordAdderHandler("delete")} variant="contained" color="error">Видалити з мого словника</Button>
    }

    return <Button onClick={() => wordAdderHandler("add")} variant="contained" color="success">Додати до мого словника</Button>
  
}


export default CustomAdderToDictionary;