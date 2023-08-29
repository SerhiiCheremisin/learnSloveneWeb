import React, {useEffect} from 'react';
import { WideButton, CommonContainer, CommonHorizontalContainer } from '../utils/styles/commonStyles';
import useGetUserDictionary from '../services/hooks/useGetUserDictionary';
import { SingleWordCard } from '../utils/styles/commonStyles';
import { IRootDictionary } from '../utils/types';
import { Typography } from '@mui/material';
import useCheckAfterRefresh from '../services/hooks/useCheckAfterRefresh';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setUserDictionary } from '../redux/slices/appStoorage';
import useGetUserData from '../services/hooks/useGetUserData';
import { addWordToDictionatyToDB } from '../utils/API';
import { customBackground } from '../utils/styles/commonStyles';

import WordAdder from '../components/WordAdder';

const UserDicrionary = () => {

  const dictionary = useGetUserDictionary();
  const checkAfterRefresh = useCheckAfterRefresh();
  const dispatch = useCommonDispatch();
  const user = useGetUserData();
  
 const deleteHandler = (word:IRootDictionary ): void => {
   const newState = [...dictionary.userDictionary].filter( (key:IRootDictionary) => key.sloWord !== word.sloWord);
   addWordToDictionatyToDB(newState, user.name).then( () => {
    localStorage.setItem( "userDictionary", JSON.stringify(newState));
    dispatch(setUserDictionary(newState));
   })
 }
  useEffect( () => {
    checkAfterRefresh();
  }, [])

  return (
    <CommonHorizontalContainer sx={customBackground}>
      <WordAdder/>
    <CommonContainer sx={{paddingTop: 15, gap:10, flexWrap: "wrap"}}>
      { dictionary.userDictionary.map( (word:IRootDictionary) => {
            return(
              <SingleWordCard key={word.sloWord}>
                 <Typography variant="h6" gutterBottom>{word.sloWord.toUpperCase()}</Typography>
                 <Typography variant="h6" gutterBottom>{word.ukrWord.toUpperCase()}</Typography>
                 <WideButton onClick={() => deleteHandler(word)} sx={{height: 50}} variant="contained" color="error">Видалити зі словника</WideButton>
              </SingleWordCard>
            )
                   }) }
    </CommonContainer>
    </CommonHorizontalContainer>
  )
}


export default UserDicrionary;