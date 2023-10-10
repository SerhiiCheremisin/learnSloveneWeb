import { imperativeMood, imperativeMoodIrregulars } from "../../services/grammarRules";
import { IImperativweMood } from "../../utils/types";
import { CommonHorizontalContainer, tableStyles } from "../../utils/styles/commonStyles";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { tableFontSize } from "../../utils/styles/commonStyles";
import { Box } from "@mui/material";
import useGetAppLanguage from "../../services/hooks/useGetAppLanguage";

const ImperativeMood = () : JSX.Element => {
    const appLanguage = useGetAppLanguage();
    const imperativeMoodRule = (el:IImperativweMood) => appLanguage === "UA" ? `Інфінитив: ${ el.ruleUkr }, наказова форма: ${el.example}.` :
                                                                             `Infinitive: ${ el.ruleEn }, imperative mood: ${el.example}.`
    const fullExample = (el:IImperativweMood) => appLanguage === "UA" ? `Повний приклад: ${el.fullExample}.` :
                                                                        `Full example: ${ el.fullExample }.`                                                                           
    const exceptionRules = (el:IImperativweMood) => appLanguage === "UA" ? `Інфінитив: ${ el.ruleUkr }. Повний приклад: ${el.example}.` :
                                                                           `Infinitive: ${ el.ruleUkr }. Full example: ${el.example}.`     
    return (
        <CommonHorizontalContainer sx={{minHeight: "89vh"}}>
       <Typography variant="h2" gutterBottom>{appLanguage === "UA" ? "Існують деякі правила наказової форми:" : "There are some rules of command form:"}</Typography>
       <Divider/>
         { imperativeMood.map( (el:IImperativweMood) => {
            return (
                 <Box style={{marginBottom: "20px", display: "flex"}} key={el.example}>
                  <Typography sx={tableFontSize}  variant="subtitle1" gutterBottom> {imperativeMoodRule(el)} </Typography>
                  { el.fullExample && <Typography sx={tableFontSize} variant="subtitle1">{fullExample(el)}</Typography> }
                 </Box>
            )
         }) }
         <Typography sx={{marginTop: 5}} variant="h2" gutterBottom>{appLanguage === "UA" ? "Також як і є слова виключення:" : "As well as there are exclusion words:"} </Typography>
         { imperativeMoodIrregulars.map( (el:IImperativweMood) => {
            return (
                 <Typography key={el.example} sx={tableFontSize} variant="subtitle1" gutterBottom>{exceptionRules(el)}</Typography>
            )
         }) }
        </CommonHorizontalContainer>
    )
}

export default ImperativeMood;