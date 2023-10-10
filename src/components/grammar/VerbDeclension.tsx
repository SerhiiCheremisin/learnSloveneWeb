import { verbDeclension, verbDeclensionEng } from "../../services/grammarRules";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useGetAppLanguage from "../../services/hooks/useGetAppLanguage";

import { tableStyles, tableFontSize } from "../../utils/styles/commonStyles";

const VerbDeclension = () : JSX.Element => {

const appLanguage = useGetAppLanguage();
let currentRule = appLanguage === "UA" ? verbDeclension : verbDeclensionEng;

    return (
         <>
       <TableContainer component={Paper}>
      <Table sx={tableStyles} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={tableFontSize} align="center">{appLanguage === "UA" ? verbDeclension[0][0] : verbDeclensionEng[0][0]}</TableCell>
            <TableCell sx={tableFontSize} align="center">{appLanguage === "UA" ? verbDeclension[0][1] : verbDeclensionEng[0][1]} </TableCell>
            <TableCell sx={tableFontSize} align="center">{appLanguage === "UA" ? verbDeclension[0][2] : verbDeclensionEng[0][2]}</TableCell>
            <TableCell sx={tableFontSize} align="center">{appLanguage === "UA" ? verbDeclension[0][3] : verbDeclensionEng[0][3]}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { currentRule.map( (el:string[], id:number) => {
             if (id === 0) {
                return null
             }
             return <TableRow key={id}>
                { el.map( (item:string) => {
                    return <TableCell sx={tableFontSize} align="center">{item}</TableCell>
                }) }
             </TableRow>
          }) }
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}

export default VerbDeclension;