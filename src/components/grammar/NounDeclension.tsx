import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { nounDeclension, nounsQuestions, nounDeclensionRules,  } from '../../services/grammarRules';

const NounDeclension = () :JSX.Element => {
   
    return(
        <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Рід</TableCell>
            <TableCell align="center">{nounsQuestions.nominative.ukrName}</TableCell>
            <TableCell align="center">{nounsQuestions.genitive.ukrName}</TableCell>
            <TableCell align="center">{nounsQuestions.dative.ukrName}</TableCell>
            <TableCell align="center">{nounsQuestions.accusative.ukrName}</TableCell>
            <TableCell align="center">{nounsQuestions.locative.ukrName}</TableCell>
            <TableCell align="center">{nounsQuestions.instrumental.ukrName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Питання</TableCell>
            <TableCell align="center">{nounsQuestions.nominative.questions}</TableCell>
            <TableCell align="center">{nounsQuestions.genitive.questions}</TableCell>
            <TableCell align="center">{nounsQuestions.dative.questions}</TableCell>
            <TableCell align="center">{nounsQuestions.accusative.questions}</TableCell>
            <TableCell align="center">{nounsQuestions.locative.questions}</TableCell>
            <TableCell align="center">{nounsQuestions.instrumental.questions}</TableCell>
          </TableRow> 
          </TableHead>
          <TableBody>
          <TableRow>
           <TableCell>Чоловічий однина</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.nominative[0]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.genitive[0]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.dative[0]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.accusative[0]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.locative[0]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.instrumental[0]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell>Чоловічий двоїна</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.nominative[1]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.genitive[1]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.dative[1]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.accusative[1]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.locative[1]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.instrumental[1]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell>Чоловічий множина</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.nominative[2]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.genitive[2]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.dative[2]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.accusative[2]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.locative[2]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.masculine.declensions.instrumental[2]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell>Жіночий однина</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.nominative[0]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.genitive[0]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.dative[0]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.accusative[0]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.locative[0]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.instrumental[0]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell>Жіночий двоїна</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.nominative[1]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.genitive[1]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.dative[1]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.accusative[1]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.locative[1]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.instrumental[1]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell>Жіночий множина</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.nominative[2]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.genitive[2]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.dative[2]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.accusative[2]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.locative[2]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.feminine.declensions.instrumental[2]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell>Середній однина</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.nominative[0]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.genitive[0]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.dative[0]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.accusative[0]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.locative[0]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.instrumental[0]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell>Середній двоїна</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.nominative[1]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.genitive[1]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.dative[1]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.accusative[1]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.locative[1]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.instrumental[1]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell>Середній множина</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.nominative[2]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.genitive[2]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.dative[2]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.accusative[2]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.locative[2]}</TableCell>
           <TableCell align="center">{nounDeclensionRules.neuter.declensions.instrumental[2]}</TableCell>
          </TableRow> 
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}

export default NounDeclension;