import React, { useState, useEffect } from 'react'
import { grammarType } from '../utils/types';
import { CategoryCard, CommonContainer, CommonHorizontalContainer } from '../utils/styles/commonStyles';
import useCheckAfterRefresh from '../services/hooks/useCheckAfterRefresh';
import { WideButton } from '../utils/styles/commonStyles';

import NounDeclension from '../components/grammar/NounDeclension';
import VerbDeclension from '../components/grammar/VerbDeclension';
import ChangeFormOvWord from '../components/grammar/ChangeFormOvWord';
import ToBe from '../components/grammar/ToBe';
import ImperativeMood from '../components/grammar/ImperativeMood';

const Grammar = () => {
 const [activeGrammar, setActiveGrammar] = useState<grammarType>("none");
 const checkRefresh = useCheckAfterRefresh();
 useEffect(() => {
  checkRefresh();
 }, [])

 const activeGrammarHandler = (value:grammarType) => {
  setActiveGrammar(value);
 } 

 const ReturnButton = (): JSX.Element => {
  return (
    <>
    <WideButton onClick={() => setActiveGrammar("none")} sx={{width: 300}}>Назад</WideButton>
    </>
  ) }
 
 if (activeGrammar === "adDeclension") return(
  <CommonHorizontalContainer>
   <ReturnButton/>
   <VerbDeclension/>
  </CommonHorizontalContainer>
 )
 if (activeGrammar === "nounDeclension") return(
  <CommonHorizontalContainer>
   <ReturnButton/>
   <NounDeclension/>
  </CommonHorizontalContainer>
 )
 if (activeGrammar === "prefix") return(
  <CommonHorizontalContainer>
   <ReturnButton/>
   <ChangeFormOvWord/>
  </CommonHorizontalContainer>
 )
 if (activeGrammar === "beAndHave") return(
  <CommonHorizontalContainer>
   <ReturnButton/>
   <ToBe/>
  </CommonHorizontalContainer>
 )
 if (activeGrammar === "imperativeMood") return(
  <CommonHorizontalContainer>
   <ReturnButton/>
   <ImperativeMood/>
  </CommonHorizontalContainer>
 )

  return (
    <CommonContainer sx={{marginTop: 15, gap: 20, flexWrap: "wrap"}}>
      <CategoryCard onClick={() => activeGrammarHandler("adDeclension")} sx={{width: 500}}>Відмінювання дієслів</CategoryCard>
      <CategoryCard onClick={() => activeGrammarHandler("beAndHave")} sx={{width: 500}}>Дієслово "БУТИ" та "МАТИ" </CategoryCard>
      <CategoryCard onClick={() => activeGrammarHandler("nounDeclension")} sx={{width: 500}}>Відмінювання іменників</CategoryCard>
      <CategoryCard onClick={() => activeGrammarHandler("prefix")} sx={{width: 500}}>Зміна значення слів через префікси</CategoryCard>
      <CategoryCard onClick={() => activeGrammarHandler("imperativeMood")} sx={{width: 500}}>Наказова форма</CategoryCard>
    </CommonContainer>
  )
}


export default Grammar;