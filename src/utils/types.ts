
//redux
export interface IUserSliceInitial {
    isUserLogged : boolean,
    userName: string,
    userDictionary: IRootDictionary[]
}

export interface IDictionaryInitial {
    activeCategory: string
}

export interface IGrammarInitial {
    activeGrammarBlock: string
}
//other
export type userType = "new" | "old";

export interface IUserObject {
    name: string,
    password: string
} 

export type userDataType = "name" | "password" ;

export interface IIrregularVerbs  {
   present: string,
   pastAndFuture: string
} 

export interface IRootDictionary {
    isIrregular:boolean,
    irregulars? : IIrregularVerbs,
    sloWord: string,
    ukrWord: string,
    category: string
}

export interface ILocalStorageData {
    userName: string,
    userPassword: string;
    userDictionary: IRootDictionary[]
}

// grammar
export interface INounDeclensionHeaders {
    nounsTitle: string[]
}
interface ISIngleNoun {
    questions : string,
    ukrName: string
}
export interface INounQuestions {
    nominative : ISIngleNoun,
    genitive : ISIngleNoun,
    dative : ISIngleNoun,
    accusative : ISIngleNoun,
    locative : ISIngleNoun,
    instrumental : ISIngleNoun
}

interface INounDeclension {
    nominative : string[],
    genitive: string[],
    dative: string[],
    accusative: string[],
    locative: string[],
    instrumental: string[],
} 

export interface IDeclensionNounsRules {
        masculine: {
         declensions: INounDeclension
       } ,
          feminine : {
           declensions: INounDeclension
       } ,
      neuter : {
       declensions:INounDeclension
       } 
   }
   export type headerOption = "masculine" | "feminine" | "neuter";
   export type sklon = "nominative" | "genitive" | "dative" | "accusative" | "locative" | "instrumental";
