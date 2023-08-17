import React, { useState, useEffect } from 'react';
import useGetUserDictionary from '../services/hooks/useGetUserDictionary';
import { Box, Typography } from '@mui/material';
import { CommonContainer, CommonHorizontalContainer } from '../utils/styles/commonStyles';
import { trainingType } from '../utils/types';
import useCheckAfterRefresh from '../services/hooks/useCheckAfterRefresh';
import { WideButton } from '../utils/styles/commonStyles';

import WordConstructor from '../components/training/WordConstructor';
import WordGame from '../components/training/WordGame';

const Training = () => {
  const [activeTab, setActiveTab] = useState<trainingType>("training")
  const dictionary = useGetUserDictionary();
  const doCheck = useCheckAfterRefresh();

  useEffect( () => {
    doCheck();
  }, [])

  const tabHandler = (categoty:trainingType):void => {
    setActiveTab(categoty);
  }

  const setActiveTabClass = (value:trainingType ):object => {
   if (value === activeTab ) {
    return {
      borderBottom: "3px solid red"
    }
   }
   return {
    borderBottom: ""
  }
  }

  const trainingScreenRender = (value:trainingType) => {
    switch (value) {
      case "training" : 
      return <WordGame/>
      case "constructor" : 
      return <WordConstructor/>
      default :
      return <WordGame/>
    }
  }

  if (dictionary.userDictionary.length < 10) {
    return (
      <CommonContainer>
      <Typography variant="h2" component="h2">Замало слів у словнику, щоб почати тренування. Необхідний мінімум - 10 слів</Typography>
      </CommonContainer>
    )
  }
  return (
    <CommonHorizontalContainer>
      <CommonContainer sx={{gap: 15, marginTop: 5}}>
      <WideButton sx={setActiveTabClass("training")} variant="contained" value="training" onClick={() => tabHandler("training")}>Тренування</WideButton>
      <WideButton sx={setActiveTabClass("constructor")} variant="contained" value="constructor" onClick={() => tabHandler("constructor")}>Конструктор слів</WideButton>
      </CommonContainer>
    <CommonContainer>
      { trainingScreenRender(activeTab) }
    </CommonContainer>
    </CommonHorizontalContainer>
  )
}


export default Training;