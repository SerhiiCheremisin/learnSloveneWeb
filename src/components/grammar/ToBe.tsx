import { CommonHorizontalContainer } from "../../utils/styles/commonStyles";
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { beAndHaveRules, beInTheFuture } from "../../services/grammarRules";

const ToBe = () :JSX.Element => {
    return(
        <CommonHorizontalContainer>
         <Typography variant="h3" style={{paddingBottom: 10}}>ДІЄСЛОВА БУТИ ТА МАТИ (ПОЗИТИВНА ТА НЕГАТИВНА ФОРМА ДЛЯ ТЕПЕРІШНЬОГО ТА МИНУЛОГО ЧАСУ)</Typography>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            { beAndHaveRules.head.ukr.map( (el:string) => {
              return <TableCell key={el} align="center">{el}</TableCell>
            }) }
          </TableRow>
        </TableHead>
        <TableBody>
          { beAndHaveRules.body.map( (el:string[]) => {
            return (
              <TableRow>
                { el.map( (el:string) => {
                  return   <TableCell align="center">{el}</TableCell>
                }) }
              </TableRow>
            )
          }) }
        </TableBody>
      </Table>
    </TableContainer>
      <Typography variant="h3" style={{paddingBottom: 10, paddingTop: 15}}>ДІЄСЛОВО БУТИ (ПОЗИТИВНА ТА НЕГАТИВНА ФОРМА ДЛЯ МАЙБУТНЬОГО)</Typography>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          { beInTheFuture.map( (el:string[]) => {
            return <TableRow>
              {  el.map( (item: string) => {
                  return <TableCell align="center">{item}</TableCell>
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