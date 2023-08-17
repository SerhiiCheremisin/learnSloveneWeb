import React, { useState, useEffect } from 'react'
import useGetUserData from '../services/hooks/useGetUserData';
import CustomAdderToDictionary from '../components/CustomAdderToDictionary';

import { CommonContainer } from '../utils/styles/commonStyles';
import { Typography } from '@mui/material';
import { baseDictionary } from '../services/rootDictionary';
import { IRootDictionary } from '../utils/types';
import { CategoryCard, SingleWordCard, CardText, CardTextBold } from '../utils/styles/commonStyles';
import Button from '@mui/material/Button';
import useCheckAfterRefresh from '../services/hooks/useCheckAfterRefresh';

const Dicrionary = () => {
  const [categories, setCategories] = useState<string[]> ([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [wordList, setWordList] = useState<IRootDictionary[]>([]);

  const doCheck = useCheckAfterRefresh();

  useEffect ( () => {
    const categories = baseDictionary.map( (el:IRootDictionary) => {
      return el.category;
    });
    const uniqueCategories = new Set(categories);
    const uniqueArray: string[] = Array.from(uniqueCategories);
    setCategories(uniqueArray);
    doCheck();
  },[])

  const userData = useGetUserData();

  const makeActiveCategoty = (categoty:string):void => {
    const filteredDictionary =[...baseDictionary].filter( (word:IRootDictionary) => word.category.toLowerCase() === categoty.toLowerCase());
    setWordList(filteredDictionary);
    setActiveCategory(categoty);
  } 

  if (!userData.isLogged) {
    return (
      <CommonContainer sx={{backgroundImage: "url('/images/slovenia-flag.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "89.2vh"}}>
      <Typography variant="h2" component="h2">Ви маєте зареєструватися, щоб користуватися словником</Typography>
      </CommonContainer>
    )
  }

  if (activeCategory === '') {
    return (
      <CommonContainer sx={{flexDirection: "column", padding: "50px 0px"}}>
        <Typography variant="h2" component="h2">Словник</Typography>
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
    <CommonContainer sx={{flexDirection: "column", padding: "50px 0px"}}>
        <Button sx={{width:"150px", height: "50px", backgroundColor: "red"}} onClick={() => setActiveCategory('')} variant="outlined">Назад</Button>
        <CommonContainer sx={{flexWrap: 'wrap', gap: "30px", marginTop: "50px"}}>
      { wordList.map( (word:IRootDictionary) => {
        return (
          <SingleWordCard key={word.sloWord}>
          <CardText>{word.sloWord.toUpperCase()}</CardText>
          <CardText>{word.ukrWord.toUpperCase()}</CardText>
          { word.isIrregular && <CardText>{ `Теперішній час`} <CardTextBold>{word.irregulars?.present}</CardTextBold></CardText>  }
          { word.isIrregular && <CardText>{ `Минулий та майбутній час`} <CardTextBold>{word.irregulars?.pastAndFuture}</CardTextBold></CardText>  }
          <CustomAdderToDictionary singleWord = {word}/>
          </SingleWordCard>
        )
      }) }
     </CommonContainer>
    </CommonContainer>
  )
}


export default Dicrionary;