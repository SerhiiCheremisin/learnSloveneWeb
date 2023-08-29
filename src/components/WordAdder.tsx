import { useState, useEffect } from "react";
import { AddWordBotton, ModalAdder } from "../utils/styles/wordAdderStyles";
import { Box, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { addWordToDictionatyToDB } from "../utils/API";
import useGetUserData from "../services/hooks/useGetUserData";
import { setUserDictionary } from "../redux/slices/appStoorage";
import useCommonDispatch from "../services/hooks/useCommonDispatch";
import useGetUserDictionary from "../services/hooks/useGetUserDictionary";
import { IRootDictionary } from "../utils/types";
import { baseDictionary } from "../services/rootDictionary";


const WordAdder = ():JSX.Element => {
    const [isModalShowed, setIsModalShowed] = useState<boolean>(false);
    const [isIrregular, setIsIrregular] = useState<boolean>(false);
    const [categories, setCategories] = useState<string[]>([]);

    const [sloWord, setSloWord] = useState<string>("");
    const [ukrWord, setUkrWord] = useState<string>("");
    const [presentTime, setPresentTime] = useState<string>("");
    const [pastAndFutureTime, setPastAndFutureTime] = useState<string>("");
    const [isAddingForbidden, setIsAddingForbidden] = useState<boolean>(true);
    const [chosenCategoty, setChosenCategory] = useState<string>("");

    const userData = useGetUserData();
    const dispatch = useCommonDispatch();
    const dictionary = useGetUserDictionary();
    
let irregularButtonText = isIrregular ? "Це неправильне дієеслово" : "Ви додаєте неправильне дієеслово";

useEffect(() => {
    const categories = baseDictionary.map( (el:IRootDictionary) => {
        return el.category;
      });
      const uniqueCategories = new Set(categories);
      const uniqueArray: string[] = Array.from(uniqueCategories);
      uniqueArray.unshift("");
      setCategories(uniqueArray);
}, [])

useEffect( () => {
   if (isIrregular) {
    if ( sloWord !== "" && ukrWord !== '' && presentTime !== "" && pastAndFutureTime !== "" && chosenCategoty !== "" ) {
        setIsAddingForbidden(false);
    } else {
        setIsAddingForbidden(true);
    }
   }
   else {
    if ( sloWord !== "" && ukrWord !== '' && chosenCategoty !== "" ) {
        setIsAddingForbidden(false);
    } else {
        setIsAddingForbidden(true);
    }
   }
  
}, [sloWord, ukrWord, presentTime, pastAndFutureTime, isIrregular , chosenCategoty])

const setStateAndCleanUp = (array: any):void => {
    setUserDictionary(array);
    setSloWord("");
    setPresentTime("");
    setUkrWord("");
    setPastAndFutureTime("");
    setChosenCategory("");
    setIsModalShowed(false);
    localStorage.setItem( "userDictionary", JSON.stringify(array) );
}
 
  const formHandler = (e:React.FormEvent):void => {
   e.preventDefault();
   if (!isIrregular) {
    const sendingState = [...dictionary.userDictionary, {sloWord: sloWord, ukrWord: ukrWord, isIrregular: false, category: chosenCategoty} ];
    addWordToDictionatyToDB(sendingState, userData.name )
    .then( () => {
        setStateAndCleanUp(sendingState);
    })
    return
   }
   const sendingState = [...dictionary.userDictionary,  {sloWord: sloWord, ukrWord: ukrWord, isIrregular: true,
     category: chosenCategoty, irregulars : {present: presentTime, pastAndFuture: pastAndFutureTime}} ];
    addWordToDictionatyToDB(sendingState, userData.name )
    .then( () => {
      setStateAndCleanUp(sendingState);
    })

  }

   if (isModalShowed) {
    return(
        <ModalAdder onSubmit={(e) => formHandler(e)}>
            <Box component="form" sx={{display: "flex", flexDirection: "column"}}>
            <TextField value={sloWord} onChange={(e) => setSloWord(e.target.value)} label="Слово словенською" variant="standard" />
            <TextField value={ukrWord} onChange={(e) => setUkrWord(e.target.value)} label="Слово українською" variant="standard" />
            <TextField
               id="filled-select-currency-native"
               select
               label="Оберіть категорію для слова"
               SelectProps={{
                 native: true,
               }}
               helperText="Ви можете обрати тільки з вже запропонованих категорій"
               variant="filled"
               onChange={(e) => setChosenCategory(e.target.value)}
             >
               {categories.map((option) => (
                 <option key={option} value={option}>
                   {option}
                 </option>
               ))}
             </TextField>
            {
                isIrregular && 
                <>
                 <TextField value={presentTime} onChange={(e) => setPresentTime(e.target.value)}  label="Теперішній час" variant="standard" />
                 <TextField value={pastAndFutureTime} onChange={(e) => setPastAndFutureTime(e.target.value)}  label="Минулий та майбутній час" variant="standard" />
                </>
            }
            
            <AddWordBotton onClick={() => setIsIrregular(!isIrregular)} variant="contained">
             <Typography variant="subtitle1">{irregularButtonText}</Typography>
            </AddWordBotton>

            <AddWordBotton type="submit" disabled={isAddingForbidden} onClick={formHandler} variant="contained">
             <Typography variant="subtitle1">Додати</Typography>
            </AddWordBotton>

            
            <AddWordBotton sx={{marginLeft: 25, marginTop: 5}} type="submit" onClick={() => setIsModalShowed(false)} variant="contained">
             <Typography variant="subtitle1">X</Typography>
            </AddWordBotton>
            </Box>
        </ModalAdder>
    )
   }
 
    return (
        <AddWordBotton onClick={() => setIsModalShowed(true)} variant="contained">
          <Typography variant="subtitle1">Додати своє слово</Typography>
        </AddWordBotton>
    )
}

export default WordAdder;