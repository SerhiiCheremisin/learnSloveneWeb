import Typography from '@mui/material/Typography';
import { CommonHorizontalContainer } from '../../utils/styles/commonStyles';
import { IChangeFormCommon, IChangeFormsParticularCases } from '../../utils/types';
import { changeFormCommon, changeFormsParticularCases } from '../../services/grammarRules';
import { tableFontSize } from '../../utils/styles/commonStyles';


const ChangeFormOvWord = () : JSX.Element => {
    return(
        <CommonHorizontalContainer>
         <Typography variant="h2" style={{paddingBottom: 10}}>Ось список найпоширеніших:</Typography>  
         { changeFormCommon.map( (el:IChangeFormCommon) => {
            return  <Typography key={el.ukr} sx={tableFontSize} variant="subtitle1">{el.ukr}</Typography>
         }) }
         <Typography variant="h2" style={{paddingBottom: 10, marginTop: 20,}}>Більш детальні приклади:</Typography>  
         { changeFormsParticularCases.map( (item:IChangeFormsParticularCases) => {
            return (
                <>
                <Typography variant="h2" style={{paddingBottom: 10,}}>{item.exampleUkr}</Typography>
                { item.cases.map( (element: IChangeFormCommon) => {
                    return <Typography key={element.ukr} sx={[{marginBottom:3} , tableFontSize]}  variant="subtitle1">{element.ukr}</Typography>
                }) }
                </>
            )
         }) }
        </CommonHorizontalContainer>
    )
}

export default ChangeFormOvWord;