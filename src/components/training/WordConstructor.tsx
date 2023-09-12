import { doShuffle } from "../../services/functions";
import { useEffect, useState } from 'react';
import useGetUserDictionary from "../../services/hooks/useGetUserDictionary";
import { IRootDictionary } from "../../utils/types";
import SingleLetter from "./SingleLetter";
import { WideButton } from "../../utils/styles/commonStyles";
import Loader from "../Loader";

import { CommonHorizontalContainer, CommonContainer } from "../../utils/styles/commonStyles";
import { Typography } from "@mui/material";


const WordConstructor = ():JSX.Element => {
    const [shuffeledArray, setShuffeledArray] = useState<IRootDictionary[]>([]);
    const [pace, setPace] = useState<number>(0);
    const [letterCount, setLetterCount] = useState<number>(0);
    const [answer, setAnswer] = useState<string>("");
    const dictionary = useGetUserDictionary();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentWord, setCurrentWord] = useState<string[]>([]);

    const setShuffle = ():void => {
        const shuffeled = doShuffle(dictionary.userDictionary);
        setShuffeledArray(shuffeled);
    }

    useEffect( () => {
        setShuffle();
        setIsLoading(false);
     }, [])
  
  useEffect( () => {
    setCurrentWord(shuffeledArray[pace]?.sloWord.split("").sort(() => Math.random() - 0.5));
    setAnswer(shuffeledArray[pace]?.ukrWord);
  },[shuffeledArray, pace])

    const resetHandler = ():void => {
        setShuffle();
    }

    useEffect( () => {
        setAnswer(shuffeledArray[pace]?.sloWord.slice(0, letterCount));
    }, [letterCount])

    if (isLoading) {
        return <Loader/>
    }

     if (shuffeledArray.length === pace) {
        return (
            <CommonHorizontalContainer sx={{marginTop: 15}}>
             <Typography variant="h2" component="h2">{`Ви закінчили збирати вся слова зі свого словника`}</Typography>
              <WideButton onClick={resetHandler} variant="contained">Почати заново</WideButton>
            </CommonHorizontalContainer>
        )
     }

    return (
        <CommonHorizontalContainer sx={{marginTop: 15}}>
         <Typography variant="h2" component="h2">{shuffeledArray[pace]?.ukrWord.toUpperCase()}</Typography>
         <CommonContainer sx={{border: "1px solid black", width: 600, height: 150, backgroundColor: "white", marginTop: 5}}>
         <Typography variant="h4" component="h4">{answer && `${answer.slice(0, letterCount).toUpperCase()}`}</Typography>
         </CommonContainer>
         <CommonContainer sx={{marginTop: 15, gap: 5}}>
          { currentWord && currentWord.map( (el:string) => {
             return (
                <>
                 <SingleLetter key={el} letter={el} word={shuffeledArray[pace]?.sloWord} setPace={setPace}
                   letterIndex={letterCount} setLetterIndex={setLetterCount} setCurrentWord={setCurrentWord}  currentWord={currentWord}/>
                </>
             )
          }) }
         </CommonContainer>
        </CommonHorizontalContainer>
    )
}

export default WordConstructor;

