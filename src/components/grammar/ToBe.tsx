import { CommonHorizontalContainer } from "../../utils/styles/commonStyles";
import Typography from '@mui/material/Typography';
import useGetAppLanguage from "../../services/hooks/useGetAppLanguage";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { beAndHaveRules, beInTheFuture } from "../../services/grammarRules";
import { returnBNTLinear, tableStyles , tableFontSize } from "../../utils/styles/commonStyles";

const ToBe = () :JSX.Element => {
  const appLanguage = useGetAppLanguage();
  const currentLanguage = appLanguage === "UA" ? beAndHaveRules.head.ukr : beAndHaveRules.head.eng;
    return(
        <CommonHorizontalContainer>
         <Typography variant="h3" style={{paddingBottom: 10}}>{
          appLanguage === "UA" ? "ДІЄСЛОВА БУТИ ТА МАТИ (ПОЗИТИВНА ТА НЕГАТИВНА ФОРМА ДЛЯ ТЕПЕРІШНЬОГО ТА МИНУЛОГО ЧАСУ)" 
          : "VERBS TO BE AND TO HAVE (POSITIVE AND NEGATIVE FORM FOR THE PRESENT AND PAST TENSES)"
         }</Typography>
         <TableContainer component={Paper}>
         <Table sx={tableStyles} aria-label="simple table">
        <TableHead>
          <TableRow>
              { currentLanguage.map( (el:string, idx:number) => {
              return <TableCell sx={tableFontSize} key={idx} align="center">{el}</TableCell>
            }) }
          </TableRow>
        </TableHead>
        <TableBody>
          { beAndHaveRules.body.map( (el:string[], idx:number) => {
            return (
              <TableRow key={idx}>
                { el.map( (el:string, id:number) => {
                  return   <TableCell key={id} sx={tableFontSize} align="center">{el}</TableCell>
                }) }
              </TableRow>
            )
          }) }
        </TableBody>
      </Table>
    </TableContainer>
      <Typography variant="h3" style={{paddingBottom: 10, paddingTop: 15}}>
        {appLanguage === "UA" ? "ДІЄСЛОВО БУТИ (ПОЗИТИВНА ТА НЕГАТИВНА ФОРМА ДЛЯ МАЙБУТНЬОГО)" 
        : "VERB TO BE (POSITIVE AND NEGATIVE FORM FOR THE FUTURE)"}
      </Typography>
      <TableContainer component={Paper}>
      <Table sx={tableStyles} aria-label="simple table">
        <TableBody>
          { beInTheFuture.map( (el:string[]) => {
            return <TableRow>
              {  el.map( (item: string) => {
                  return <TableCell key={item} sx={tableFontSize}  align="center">{item}</TableCell>
              })}
             </TableRow>
          }) }
        </TableBody>
      </Table>
    </TableContainer>
        </CommonHorizontalContainer>
    )
}

export default ToBe;