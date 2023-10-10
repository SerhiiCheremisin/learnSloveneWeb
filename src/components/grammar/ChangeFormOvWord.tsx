import Typography from '@mui/material/Typography';
import { CommonHorizontalContainer } from '../../utils/styles/commonStyles';
import { IChangeFormCommon, IChangeFormsParticularCases } from '../../utils/types';
import { changeFormCommon, changeFormsParticularCases } from '../../services/grammarRules';
import { tableFontSize } from '../../utils/styles/commonStyles';
import useGetAppLanguage from '../../services/hooks/useGetAppLanguage';


const ChangeFormOvWord = () : JSX.Element => {
    const appLanguage = useGetAppLanguage();
    return(
        <CommonHorizontalContainer>
         <Typography variant="h2" style={{paddingBottom: 10}}>{appLanguage === "UA" ? "Ось список найпоширеніших" : "Here is a list of the most common"}</Typography>  
         { changeFormCommon.map( (el:IChangeFormCommon) => {
            return  <Typography key={el.ukr} sx={tableFontSize} variant="subtitle1">{appLanguage === "UA" ? el.ukr : el.eng}</Typography>
         }) }
         <Typography variant="h2" style={{paddingBottom: 10, marginTop: 20,}}>{appLanguage === "UA" ? "Більш детальні приклади:" : "More detailed examples:"}</Typography>  
         { changeFormsParticularCases.map( (item:IChangeFormsParticularCases) => {
            return (
                <>
                <Typography variant="h2" style={{paddingBottom: 10,}}>{appLanguage === "UA" ? item.exampleUkr : item.exampleEng}</Typography>
                { item.cases.map( (element: IChangeFormCommon) => {
                    return <Typography key={element.ukr} sx={[{marginBottom:3} , tableFontSize]}  variant="subtitle1">{appLanguage === "UA" ? element.ukr : element.eng}</Typography>
                }) }
                </>
            )
         }) }
        </CommonHorizontalContainer>
    )
}

export default ChangeFormOvWord;