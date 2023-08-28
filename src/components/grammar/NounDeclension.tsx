import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { nounDeclension, nounsQuestions, nounDeclensionRules,  } from '../../services/grammarRules';
import { returnBNTLinear, tableStyles, tableFontSize} from '../../utils/styles/commonStyles';

const NounDeclension = () :JSX.Element => {
   
    return(
        <>
        <TableContainer component={Paper}>
        <Table sx={tableStyles} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={tableFontSize}>Рід</TableCell>
            <TableCell sx={tableFontSize} align="center">{nounsQuestions.nominative.ukrName}</TableCell>
            <TableCell sx={tableFontSize} align="center">{nounsQuestions.genitive.ukrName}</TableCell>
            <TableCell sx={tableFontSize} align="center">{nounsQuestions.dative.ukrName}</TableCell>
            <TableCell sx={tableFontSize} align="center">{nounsQuestions.accusative.ukrName}</TableCell>
            <TableCell sx={tableFontSize} align="center">{nounsQuestions.locative.ukrName}</TableCell>
            <TableCell sx={tableFontSize} align="center">{nounsQuestions.instrumental.ukrName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={tableFontSize}>Питання</TableCell>
            <TableCell sx={tableFontSize} align="center">{nounsQuestions.nominative.questions}</TableCell>
            <TableCell sx={tableFontSize} align="center">{nounsQuestions.genitive.questions}</TableCell>
            <TableCell sx={tableFontSize} align="center">{nounsQuestions.dative.questions}</TableCell>
            <TableCell sx={tableFontSize} align="center">{nounsQuestions.accusative.questions}</TableCell>
            <TableCell sx={tableFontSize} align="center">{nounsQuestions.locative.questions}</TableCell>
            <TableCell sx={tableFontSize} align="center">{nounsQuestions.instrumental.questions}</TableCell>
          </TableRow> 
          </TableHead>
          <TableBody>
          <TableRow>
           <TableCell sx={tableFontSize}>Чоловічий однина</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.nominative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.genitive[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.dative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.accusative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.locative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.instrumental[0]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell sx={tableFontSize}>Чоловічий двоїна</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.nominative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.genitive[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.dative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.accusative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.locative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.instrumental[1]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell sx={tableFontSize}>Чоловічий множина</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.nominative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.genitive[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.dative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.accusative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.locative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.instrumental[2]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell sx={tableFontSize}>Жіночий однина</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.nominative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.genitive[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.dative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.accusative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.locative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.instrumental[0]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell sx={tableFontSize}>Жіночий двоїна</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.nominative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.genitive[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.dative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.accusative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.locative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.instrumental[1]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell sx={tableFontSize}>Жіночий множина</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.nominative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.genitive[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.dative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.accusative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.locative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.instrumental[2]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell sx={tableFontSize}>Середній однина</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.nominative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.genitive[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.dative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.accusative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.locative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.instrumental[0]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell sx={tableFontSize}>Середній двоїна</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.nominative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.genitive[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.dative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.accusative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.locative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.instrumental[1]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell sx={tableFontSize}>Середній множина</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.nominative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.genitive[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.dative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.accusative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.locative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.instrumental[2]}</TableCell>
          </TableRow> 
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}

export default NounDeclension;