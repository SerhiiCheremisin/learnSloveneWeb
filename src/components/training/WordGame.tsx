import { useEffect, useState } from "react";
import useGetUserDictionary from "../../services/hooks/useGetUserDictionary";
import { IRootDictionary } from "../../utils/types";
import { doShuffle } from "../../services/functions";
import { Button, Typography } from "@mui/material";
import { CommonHorizontalContainer, CommonContainer } from "../../utils/styles/commonStyles";
import WordGameItem from "./WordGameItem";
import Loader from "../Loader";
import useGetAppLanguage from "../../services/hooks/useGetAppLanguage";


const WordGame = ():JSX.Element => {
const [step, setStep] = useState<number>(0);
const [correct, setCorrect] = useState<number>(0);
const [incorrect, setIncorrect] = useState<number>(0);
const [shuffeledArray, setShuffeledArray] = useState<IRootDictionary[]>([]);
const [answers, setAnswers] = useState<IRootDictionary[]>([]);
const dictionary = useGetUserDictionary();
const [isLoading, setIsLoading] = useState<boolean>(true);
const appLanguage = useGetAppLanguage();

const makeAnswers = () => {
    const filteredArray = [...dictionary.userDictionary].filter( (word:IRootDictionary) => word.sloWord !== shuffeledArray[step]?.sloWord);
    const shuffeled = doShuffle(filteredArray);
    const slicedArray = shuffeled.slice(0,3)
    slicedArray.push(shuffeledArray[step]);
    const shuffledAnswers = doShuffle(slicedArray);
    setAnswers(shuffledAnswers);
}

   useEffect( () => {
    const shuffeled = doShuffle(dictionary.userDictionary);
    setShuffeledArray(shuffeled);
    setIsLoading(false);
 }, [])

 useEffect( () => {
    if (shuffeledArray) {
        makeAnswers();
    }
 },[shuffeledArray])

 const resetHandler = ():void => {
    setCorrect(0);
    setIncorrect(0);
    setStep(0);
 }

 useEffect ( () => {
    makeAnswers();
 }, [step])
    
    if (isLoading) {
        return <Loader/>
    }

    if (step === 10) {
        return (
            <CommonHorizontalContainer sx={{marginTop: 15}}>
                <Typography variant="h2" component="h2">{appLanguage === "UA" ? "Гра закінчилася" : "The game has ended"}</Typography>
                <Typography variant="h2" component="h2">{appLanguage === "UA" ? `У вас ${correct} правильних та ${incorrect} неправильних відповідей` 
                                                                               :`You have ${correct} correct and ${incorrect} wrong answeres` }</Typography>
                <Button onClick={resetHandler} variant="contained">{appLanguage === "UA" ? "Почати заново" : "Start over"}</Button>
            </CommonHorizontalContainer>
        )
    }

    return (
        <CommonHorizontalContainer sx={{marginTop: 15}}>
        <Typography variant="h2" component="h2">{shuffeledArray[step]?.sloWord.toUpperCase()}</Typography>
        <CommonContainer sx={{gap: 10, marginTop:10}}>
        { answers.map( (el:IRootDictionary, id:number) => {
              return <WordGameItem key={id} word={el} setStep={setStep} setCorrect={setCorrect} setIncorrect = {setIncorrect} step={step} shuffeledArray={shuffeledArray}/>
         }) }
        </CommonContainer>
        </CommonHorizontalContainer>
    )
}

export default WordGame;