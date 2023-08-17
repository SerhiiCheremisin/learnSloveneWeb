import { useState, useEffect } from "react";
import { SingleConstructorLetter } from "../../utils/styles/commonStyles"

interface ISingleLetterProps {
  letter: string,
  word: string,
  setPace: Function,
  letterIndex: number,
  setLetterIndex: Function
}

const SingleLetter = ( { letter, word, setPace, letterIndex, setLetterIndex }:ISingleLetterProps ):JSX.Element => {
  const [customBG, setCustomBG] = useState<object>({
    backgroundColor: ""
  });
  const [needToUpdate, setNeedToUpdate] = useState<boolean>(false);

  useEffect( () => {
   if (needToUpdate) {
    if (word.length -1 === letterIndex) {
        setTimeout( () => {
         setPace( (prev:number) => { return prev + 1 } );
         setLetterIndex(0);
        }, 2000)
       }
     setTimeout( () => {
        setNeedToUpdate(false);
        setCustomBG({
            backgroundColor: ""
        });
        setLetterIndex( (prev:number) => { return prev + 1});
     }, 1000)
   }
  
  }, [needToUpdate])

  const answerCheckHandler = () : void => {
 
    if ( word[letterIndex] === letter) {
        setCustomBG({
            backgroundColor: "green"
        });
        setNeedToUpdate(true);
        return
    } 
    setCustomBG({
        backgroundColor: "red"
    });
    setTimeout( () => {
        setCustomBG({
            backgroundColor: ""
        });
    }, 500)
  }

    return(
        <SingleConstructorLetter onClick={answerCheckHandler} sx={customBG}>
          {letter}
        </SingleConstructorLetter>
    )
}

export default SingleLetter;