import { useState, useEffect } from 'react';
import { WideButton } from "../../utils/styles/commonStyles";
import { IRootDictionary } from "../../utils/types";
import { Step } from '@mui/material';

interface IWordGameItemProps {
    word : IRootDictionary,
    step: number,
    setStep: Function,
    setCorrect: Function,
    setIncorrect: Function,
    shuffeledArray : IRootDictionary[]
}

const WordGameItem = ( { word, setStep, setCorrect, setIncorrect, shuffeledArray, step } : IWordGameItemProps) => {

   const[customBG, setCustomBG] = useState<object>({
    backgroundColor: "white"
   });
   const [needToReset, setNeedToReset] = useState<boolean>(false);

   useEffect(() => {
    if (needToReset) {
        setTimeout( () => {
            setStep( (prev:number) => { return prev + 1 });
            setCustomBG({
                backgroundColor: "white"
            });
            setNeedToReset(false);
        }, 1000)
    }
   },[needToReset])

   const buttonHandler = ( value: IRootDictionary ) => {
     if (shuffeledArray[step].ukrWord === value.ukrWord) {
        setCustomBG( {
            backgroundColor: "green"
        })
        setNeedToReset(true);
        setCorrect( (prev:number) => { return prev+1 });
        return
     }
     setCustomBG( {
        backgroundColor: "red"
    })
    setNeedToReset(true);
    setIncorrect( (prev:number) =>  {return  prev+1 });
   }

    return <WideButton onClick={() => buttonHandler(word)} sx={[{color:"black"},customBG]} variant="contained" key={word?.sloWord}>{ word?.ukrWord.toUpperCase() }</WideButton>
}

export default WordGameItem;