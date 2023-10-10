import React, { useState, useEffect } from 'react'
import useGetUserData from '../services/hooks/useGetUserData';
import CustomAdderToDictionary from '../components/CustomAdderToDictionary';
import Loader from '../components/Loader';

import { CommonContainer } from '../utils/styles/commonStyles';
import { Typography } from '@mui/material';
import { baseDictionary } from '../services/rootDictionary';
import { IRootDictionary } from '../utils/types';
import { CategoryCard, SingleWordCard, CardText, CardTextBold } from '../utils/styles/commonStyles';
import Button from '@mui/material/Button';
import useCheckAfterRefresh from '../services/hooks/useCheckAfterRefresh';
import { customBackground, returnBTNSolid } from '../utils/styles/commonStyles';
import useGetAppLanguage from '../services/hooks/useGetAppLanguage';

const Dicrionary = () => {
  const [categories, setCategories] = useState<string[]> ([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [wordList, setWordList] = useState<IRootDictionary[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const appLanguage = useGetAppLanguage();

  const doCheck = useCheckAfterRefresh();
  const setCategoriesFunc = ():void => {
    const categories = baseDictionary.map( (el:IRootDictionary) => {
      const returnValue = appLanguage === "UA" ?  el.category : el.categoryEng
      return returnValue;
    });
    const uniqueCategories = new Set(categories);
    const uniqueArray: string[] = Array.from(uniqueCategories);
    setCategories(uniqueArray);
  }

  useEffect ( () => {
    setCategoriesFunc();
    doCheck();
    setIsLoading(false);
  },[])

  useEffect( () => {
    setCategoriesFunc();
  }, [appLanguage])

  const userData = useGetUserData();

  const makeActiveCategoty = (categoty:string):void => {
    if (appLanguage === "UA" ) {
      const filteredDictionary = [...baseDictionary].filter( (word:IRootDictionary) => word.category.toLowerCase() === categoty.toLowerCase());
      setWordList(filteredDictionary);
      setActiveCategory(categoty);
    }
    else {
      const filteredDictionary = [...baseDictionary].filter( (word:IRootDictionary) => word.categoryEng.toLowerCase() === categoty.toLowerCase());
      setWordList(filteredDictionary);
      setActiveCategory(categoty);
    }
  } 

  if (isLoading) {
    return <Loader/>
  }
   
  if (!userData.isLogged) {
    return (
      <CommonContainer sx={[{backgroundImage: "url('/images/slovenia-flag.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "89.2vh"}, customBackground]}>
      <Typography variant="h2" component="h2">{appLanguage === "UA" ? "Ви маєте зареєструватися, щоб користуватися словником" : "You should be logged in to use dictionary"}</Typography>
      </CommonContainer>
    )
  }

  if (activeCategory === '') {
    return (
      <CommonContainer sx={[{flexDirection: "column", padding: "50px 0px"}, customBackground]}>
        <Typography variant="h2" component="h2">{appLanguage === "UA" ? "Словник" : "Dictionary"}</Typography>
        <CommonContainer sx={{flexWrap: 'wrap', gap: "30px", marginTop: "50px"}}>
        { categories.map( (el:string) => {
          return (
            <CategoryCard key={el} onClick={() => makeActiveCategoty(el)}>{`${el}`}</CategoryCard>
          )
        }) }
        </CommonContainer>
      </CommonContainer>
    )
  }

  return (
    <CommonContainer sx={[{flexDirection: "column", padding: "50px 0px"}, customBackground]}>
        <Button sx={[{width:"200px", height: "50px"}, returnBTNSolid]} onClick={() => setActiveCategory('')} variant="outlined">
                    {appLanguage === "UA" ? "Назад" : "Go back"}</Button>
        <CommonContainer sx={{flexWrap: 'wrap', gap: "30px", marginTop: "50px"}}>
      { wordList.map( (word:IRootDictionary) => {
        return (
          <SingleWordCard key={word.sloWord}>
          <CardText>{word.sloWord.toUpperCase()}</CardText>
          <CardText>{appLanguage === "UA" ? word.ukrWord.toUpperCase() : word.engWord.toUpperCase()}</CardText>
          { word.isIrregular && <CardText>{ appLanguage === "UA" ? `Теперішній час` : "Present"}
                                <CardTextBold>{word.irregulars?.present}</CardTextBold></CardText>  }
          { word.isIrregular && <CardText>{ appLanguage === "UA" ? `Минулий та майбутній час` : "Past and future"}
                                <CardTextBold>{word.irregulars?.pastAndFuture}</CardTextBold></CardText>  }
          <CustomAdderToDictionary singleWord = {word}/>
          </SingleWordCard>
        )
      }) }
     </CommonContainer>
    </CommonContainer>
  )
}


export default Dicrionary;