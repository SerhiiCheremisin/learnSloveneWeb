import React, { useState, useEffect } from 'react'
import { grammarType } from '../utils/types';
import { CategoryCard, CommonContainer, CommonHorizontalContainer } from '../utils/styles/commonStyles';
import useCheckAfterRefresh from '../services/hooks/useCheckAfterRefresh';
import { WideButton, returnBNTLinear, returnBTNSolid } from '../utils/styles/commonStyles';
import { customBackground } from '../utils/styles/commonStyles';

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
    <WideButton onClick={() => setActiveGrammar("none")} sx={[{width: 200, height: 50, margin: 5}, returnBTNSolid]}>Назад</WideButton>
    </>
  ) }
 
 if (activeGrammar === "adDeclension") return(
  <CommonHorizontalContainer sx={returnBNTLinear}>
   <ReturnButton/>
   <VerbDeclension/>
  </CommonHorizontalContainer>
 )
 if (activeGrammar === "nounDeclension") return(
  <CommonHorizontalContainer sx={returnBNTLinear}>
   <ReturnButton/>
   <NounDeclension/>
  </CommonHorizontalContainer>
 )
 if (activeGrammar === "prefix") return(
  <CommonHorizontalContainer sx={returnBNTLinear}>
   <ReturnButton/>
   <ChangeFormOvWord/>
  </CommonHorizontalContainer>
 )
 if (activeGrammar === "beAndHave") return(
  <CommonHorizontalContainer sx={returnBNTLinear}>
   <ReturnButton/>
   <ToBe/>
  </CommonHorizontalContainer>
 )
 if (activeGrammar === "imperativeMood") return(
  <CommonHorizontalContainer sx={returnBNTLinear}>
   <ReturnButton/>
   <ImperativeMood/>
  </CommonHorizontalContainer>
 )

  return (
    <CommonContainer sx={[{paddingTop: 15, gap: 20, flexWrap: "wrap", minHeight: "89vh"}, customBackground]}>
      <CategoryCard onClick={() => activeGrammarHandler("adDeclension")} sx={{width: 500}}>Відмінювання дієслів</CategoryCard>
      <CategoryCard onClick={() => activeGrammarHandler("beAndHave")} sx={{width: 500}}>Дієслово "БУТИ" та "МАТИ" </CategoryCard>
      <CategoryCard onClick={() => activeGrammarHandler("nounDeclension")} sx={{width: 500}}>Відмінювання іменників</CategoryCard>
      <CategoryCard onClick={() => activeGrammarHandler("prefix")} sx={{width: 500}}>Зміна значення слів через префікси</CategoryCard>
      <CategoryCard onClick={() => activeGrammarHandler("imperativeMood")} sx={{width: 500}}>Наказова форма</CategoryCard>
    </CommonContainer>
  )
}


export default Grammar;