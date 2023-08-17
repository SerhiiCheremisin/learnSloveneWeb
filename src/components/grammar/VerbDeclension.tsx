import { verbDeclension } from "../../services/grammarRules";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const VerbDeclension = () : JSX.Element =>{


    return (
         <>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{verbDeclension[0][0]}</TableCell>
            <TableCell align="center">{verbDeclension[0][1]} </TableCell>
            <TableCell align="center">{verbDeclension[0][2]}</TableCell>
            <TableCell align="center">{verbDeclension[0][3]}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { verbDeclension.map( (el:string[], id:number) => {
             if (id === 0) {
                return <></>
             }
             return <TableRow key={id}>
                { el.map( (item:string) => {
                    return <TableCell align="center">{item}</TableCell>
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