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
import useGetAppLanguage from "../services/hooks/useGetAppLanguage";

const WordAdder = ():JSX.Element => {
    const [isModalShowed, setIsModalShowed] = useState<boolean>(false);
    const [isIrregular, setIsIrregular] = useState<boolean>(false);
    const [categories, setCategories] = useState<string[]>([]);

    const [sloWord, setSloWord] = useState<string>("");
    const [addedWord, setAddedWord] = useState<string>("");
    const [presentTime, setPresentTime] = useState<string>("");
    const [pastAndFutureTime, setPastAndFutureTime] = useState<string>("");
    const [isAddingForbidden, setIsAddingForbidden] = useState<boolean>(true);
    const [chosenCategoty, setChosenCategory] = useState<string>("");

    const userData = useGetUserData();
    const dispatch = useCommonDispatch();
    const dictionary = useGetUserDictionary();
    const appLanguage = useGetAppLanguage();
    
let irregularButtonText = isIrregular ? "Це неправильне дієслово" : "Ви додаєте неправильне дієслово";
let irregularButtonTextEng = isIrregular ? "This is irregular verb" : "You are adding irregular verb";
const setCategoriesAfterLangChanged = ():void => {
  const categories = baseDictionary.map( (el:IRootDictionary) => {
    const whatToAdd = appLanguage === "UA" ? el.category : el.categoryEng;
    return whatToAdd;
  });
  const uniqueCategories = new Set(categories);
  const uniqueArray: string[] = Array.from(uniqueCategories);
  uniqueArray.unshift("");
  setCategories(uniqueArray);
}
useEffect(() => {
  setCategoriesAfterLangChanged();
}, [])

useEffect( () => {
  setCategoriesAfterLangChanged();
}, [appLanguage])

useEffect( () => {
   if (isIrregular) {
    if ( sloWord !== "" && addedWord !== '' && presentTime !== "" && pastAndFutureTime !== "" && chosenCategoty !== "" ) {
        setIsAddingForbidden(false);
    } else {
        setIsAddingForbidden(true);
    }
   }
   else {
    if ( sloWord !== "" && addedWord !== '' && chosenCategoty !== "" ) {
        setIsAddingForbidden(false);
    } else {
        setIsAddingForbidden(true);
    }
   }
  
}, [sloWord, addedWord, presentTime, pastAndFutureTime, isIrregular , chosenCategoty])

const setStateAndCleanUp = (array: any):void => {
    setUserDictionary(array);
    setSloWord("");
    setPresentTime("");
    setAddedWord("");
    setPastAndFutureTime("");
    setChosenCategory("");
    setIsModalShowed(false);
    localStorage.setItem( "userDictionary", JSON.stringify(array));
    localStorage.setItem( "userLanguage", JSON.stringify(appLanguage));
}
 
  const formHandler = (e:React.FormEvent):void => {
   e.preventDefault();
   if (!isIrregular) {
    let currentWord = appLanguage === "UA" ? [...dictionary.userDictionary, {sloWord: sloWord, ukrWord: addedWord, engWord: "", isIrregular: false, category: chosenCategoty, categoryEng: ""} ]
                                           : [...dictionary.userDictionary, {sloWord: sloWord, engWord: addedWord, ukrWord: "", isIrregular: false, category: "", categoryEng: chosenCategoty} ];
    const sendingState = currentWord;
    addWordToDictionatyToDB(sendingState, userData.name )
    .then( () => {
        setStateAndCleanUp(sendingState);
    })
    return
   }
   let currentWord = appLanguage === "UA" ? [...dictionary.userDictionary, {sloWord: sloWord, ukrWord: addedWord, isIrregular: true, engWord: "",
                                             category: chosenCategoty, categoryEng: "", irregulars : {present: presentTime, pastAndFuture: pastAndFutureTime}}]
                                          : [...dictionary.userDictionary, {sloWord: sloWord, engWord: addedWord,  ukrWord: "", isIrregular: true,
                                            category: "", categoryEng: chosenCategoty, irregulars : {present: presentTime, pastAndFuture: pastAndFutureTime}}];
   const sendingState = currentWord;
    addWordToDictionatyToDB(sendingState, userData.name )
    .then( () => {
      setStateAndCleanUp(sendingState);
    })

  }

   if (isModalShowed) {
    return(
        <ModalAdder onSubmit={(e) => formHandler(e)}>
            <Box component="form" sx={{display: "flex", flexDirection: "column"}}>
            <TextField value={sloWord} onChange={(e) => setSloWord(e.target.value)} label={appLanguage === "UA" ? "Слово словенською" : "Word in Slovene"} variant="standard" />
            <TextField value={addedWord} onChange={(e) => setAddedWord(e.target.value)} label={appLanguage === "UA" ? "Слово українською" : "Word in English"} variant="standard" />
            <TextField
               id="filled-select-currency-native"
               select
               label={appLanguage === "UA" ? "Оберіть категорію для слова" : "Chose the category"}
               SelectProps={{
                 native: true,
               }}
               helperText={appLanguage === "UA" ? "Ви можете обрати тільки з вже запропонованих категорій" : "You can choose only from the already offered categories"} 
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
                 <TextField value={presentTime} onChange={(e) => setPresentTime(e.target.value)} 
                            label={appLanguage === "UA" ? "Теперішній час" : "Present"} variant="standard" />
                 <TextField value={pastAndFutureTime} onChange={(e) => setPastAndFutureTime(e.target.value)}
                            label={appLanguage === "UA" ? "Минулий та майбутній час" : "Past and Future"} variant="standard" />
                </>
            }
            
            <AddWordBotton onClick={() => setIsIrregular(!isIrregular)} variant="contained">
             <Typography variant="subtitle1">{appLanguage === "UA" ? irregularButtonText : irregularButtonTextEng}</Typography>
            </AddWordBotton>

            <AddWordBotton type="submit" disabled={isAddingForbidden} onClick={formHandler} variant="contained">
             <Typography variant="subtitle1">{appLanguage === "UA" ? "Додати" : "Add"}</Typography>
            </AddWordBotton>

            <AddWordBotton sx={{marginLeft: 25, marginTop: 5}} type="submit" onClick={() => setIsModalShowed(false)} variant="contained">
             <Typography variant="subtitle1">{appLanguage === "UA" ? "Закрити" : "Close"}</Typography>
            </AddWordBotton>
            </Box>
        </ModalAdder>
    )
   }
 
    return (
        <AddWordBotton onClick={() => setIsModalShowed(true)} variant="contained">
          <Typography variant="subtitle1">{appLanguage === "UA" ? "Додати своє слово" : "Add new word"}</Typography>
        </AddWordBotton>
    )
}

export default WordAdder;