import { imperativeMood, imperativeMoodIrregulars } from "../../services/grammarRules";
import { IImperativweMood } from "../../utils/types";
import { CommonHorizontalContainer } from "../../utils/styles/commonStyles";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const ImperativeMood = () : JSX.Element => {
    return (
        <CommonHorizontalContainer>
       <Typography variant="subtitle1" gutterBottom>Існують деякі правила наказової форми: </Typography>
       <Divider/>
         { imperativeMood.map( (el:IImperativweMood) => {
            return (
                 <Typography key={el.example} variant="body1" gutterBottom>Інфінитив: { el.ruleUkr }, наказова форма {el.example}</Typography>
            )
         }) }
         <Typography sx={{marginTop: 5}} variant="subtitle1" gutterBottom>Також як і є слова виключення: </Typography>
         { imperativeMoodIrregulars.map( (el:IImperativweMood) => {
            return (
                 <Typography key={el.example} variant="body1" gutterBottom>Інфінитив: { el.ruleUkr }, Повний приклад  {el.example}</Typography>
            )
         }) }
        </CommonHorizontalContainer>
    )
}

export default ImperativeMood;