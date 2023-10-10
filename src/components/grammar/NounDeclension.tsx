import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import useGetAppLanguage from '../../services/hooks/useGetAppLanguage';

import { nounDeclension, nounsQuestions, nounDeclensionRules,  } from '../../services/grammarRules';
import { returnBNTLinear, tableStyles, tableFontSize} from '../../utils/styles/commonStyles';

const NounDeclension = () :JSX.Element => {

  const appLanguage = useGetAppLanguage();
   
    return(
        <>
        <TableContainer component={Paper}>
        <Table sx={tableStyles} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={tableFontSize}>{appLanguage === "UA" ? "Рід" : "Family"}</TableCell>
            <TableCell sx={tableFontSize} align="center">{appLanguage === "UA" ? nounsQuestions.nominative.ukrName : nounsQuestions.nominative.engName}</TableCell>
            <TableCell sx={tableFontSize} align="center">{appLanguage === "UA" ? nounsQuestions.genitive.ukrName : nounsQuestions.genitive.engName}</TableCell>
            <TableCell sx={tableFontSize} align="center">{appLanguage === "UA" ? nounsQuestions.dative.ukrName : nounsQuestions.dative.engName}</TableCell>
            <TableCell sx={tableFontSize} align="center">{appLanguage === "UA" ? nounsQuestions.accusative.ukrName : nounsQuestions.accusative.engName}</TableCell>
            <TableCell sx={tableFontSize} align="center">{appLanguage === "UA" ? nounsQuestions.locative.ukrName : nounsQuestions.locative.engName}</TableCell>
            <TableCell sx={tableFontSize} align="center">{appLanguage === "UA" ? nounsQuestions.instrumental.ukrName : nounsQuestions.instrumental.engName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={tableFontSize}>{appLanguage === "UA" ? "Питання" : "Question"}</TableCell>
            <TableCell sx={tableFontSize} align="center">{appLanguage === "UA" ? nounsQuestions.nominative.questions : nounsQuestions.nominative.questionEng}</TableCell>
            <TableCell sx={tableFontSize} align="center">{appLanguage === "UA" ? nounsQuestions.genitive.questions : nounsQuestions.genitive.questionEng}</TableCell>
            <TableCell sx={tableFontSize} align="center">{appLanguage === "UA" ? nounsQuestions.dative.questions : nounsQuestions.dative.questionEng}</TableCell>
            <TableCell sx={tableFontSize} align="center">{appLanguage === "UA" ? nounsQuestions.accusative.questions : nounsQuestions.accusative.questionEng}</TableCell>
            <TableCell sx={tableFontSize} align="center">{appLanguage === "UA" ? nounsQuestions.locative.questions : nounsQuestions.locative.questionEng}</TableCell>
            <TableCell sx={tableFontSize} align="center">{appLanguage === "UA" ? nounsQuestions.instrumental.questions : nounsQuestions.instrumental.questionEng}</TableCell>
          </TableRow> 
          </TableHead>
          <TableBody>
          <TableRow>
           <TableCell sx={tableFontSize}>{appLanguage === "UA" ? "Чоловічий однина" : "Masculine singular"}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.nominative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.genitive[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.dative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.accusative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.locative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.instrumental[0]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell sx={tableFontSize}>{appLanguage === "UA" ? "Чоловічий двоїна" : "Masculine double"}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.nominative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.genitive[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.dative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.accusative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.locative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.instrumental[1]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell sx={tableFontSize}>{appLanguage === "UA" ? "Чоловічий множина" : "Masculine plural"}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.nominative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.genitive[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.dative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.accusative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.locative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.masculine.declensions.instrumental[2]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell sx={tableFontSize}>{appLanguage === "UA" ? "Жіночий однина" : "Feminine singular"}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.nominative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.genitive[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.dative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.accusative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.locative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.instrumental[0]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell sx={tableFontSize}>{appLanguage === "UA" ? "Жіночий двоїна" : "Feminine double"}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.nominative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.genitive[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.dative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.accusative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.locative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.instrumental[1]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell sx={tableFontSize}>{appLanguage === "UA" ? "Жіночий множина" : "Feminine plural"}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.nominative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.genitive[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.dative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.accusative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.locative[2]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.feminine.declensions.instrumental[2]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell sx={tableFontSize}>{appLanguage === "UA" ? "Середній однина" : "Neuter singular"}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.nominative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.genitive[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.dative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.accusative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.locative[0]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.instrumental[0]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell sx={tableFontSize}>{appLanguage === "UA" ? "Середній двоїна" : "Neuter double"}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.nominative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.genitive[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.dative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.accusative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.locative[1]}</TableCell>
           <TableCell sx={tableFontSize} align="center">{nounDeclensionRules.neuter.declensions.instrumental[1]}</TableCell>
          </TableRow> 
          <TableRow>
           <TableCell sx={tableFontSize}>{appLanguage === "UA" ? "Середній множина" : "Neuter plural"}</TableCell>
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