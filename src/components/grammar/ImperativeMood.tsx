import { imperativeMood, imperativeMoodIrregulars } from "../../services/grammarRules";
import { IImperativweMood } from "../../utils/types";
import { CommonHorizontalContainer, tableStyles } from "../../utils/styles/commonStyles";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { tableFontSize } from "../../utils/styles/commonStyles";

const ImperativeMood = () : JSX.Element => {
    return (
        <CommonHorizontalContainer sx={{minHeight: "89vh"}}>
       <Typography variant="h2" gutterBottom>Існують деякі правила наказової форми: </Typography>
       <Divider/>
         { imperativeMood.map( (el:IImperativweMood) => {
            return (
                 <Typography key={el.example} sx={tableFontSize}  variant="subtitle1"  gutterBottom>Інфінитив: { el.ruleUkr }, наказова форма {el.example}</Typography>
            )
         }) }
         <Typography sx={{marginTop: 5}} variant="h2" gutterBottom>Також як і є слова виключення: </Typography>
         { imperativeMoodIrregulars.map( (el:IImperativweMood) => {
            return (
                 <Typography key={el.example} sx={tableFontSize} variant="subtitle1"  gutterBottom>Інфінитив: { el.ruleUkr }, Повний приклад  {el.example}</Typography>
            )
         }) }
        </CommonHorizontalContainer>
    )
}

export default ImperativeMood;