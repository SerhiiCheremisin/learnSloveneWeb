import React, {useEffect} from 'react';
import { WideButton, CommonContainer } from '../utils/styles/commonStyles';
import useGetUserDictionary from '../services/hooks/useGetUserDictionary';
import { SingleWordCard } from '../utils/styles/commonStyles';
import { IRootDictionary } from '../utils/types';
import { Typography } from '@mui/material';
import useCheckAfterRefresh from '../services/hooks/useCheckAfterRefresh';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setUserDictionary } from '../redux/slices/appStoorage';

const UserDicrionary = () => {

  const dictionary = useGetUserDictionary();
  const checkAfterRefresh = useCheckAfterRefresh();
  const dispatch = useCommonDispatch();
  
 const deleteHandler = (word:IRootDictionary ): void => {
   const newState = [...dictionary.userDictionary].filter( (key:IRootDictionary) => key.sloWord !== word.sloWord);
   localStorage.setItem( "userDictionary", JSON.stringify(newState));
   dispatch(setUserDictionary(newState));
 }

  useEffect( () => {
    checkAfterRefresh();
  }, [])

  return (
    <CommonContainer sx={{marginTop: 15, gap:10, flexWrap: "wrap"}}>
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
  )
}


export default UserDicrionary;