
//redux

export type appLanguage =  "UA" | "ENG"
export interface IUserSliceInitial {
    isUserLogged : boolean,
    userName: string,
    userDictionary: IRootDictionary[]
    appLang: appLanguage
}

export interface IDictionaryInitial {
    activeCategory: string
}

export interface IGrammarInitial {
    activeGrammarBlock: string
}


//other
export type userType = "new" | "old";
export type grammarType = "adDeclension" | "beAndHave" | "nounDeclension" | "prefix" | "imperativeMood" | "none";

export type trainingType = "training" | "constructor";
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
    engWord: string,
    category: string,
    categoryEng: string
}

export interface ILocalStorageData {
    userName: string,
    userPassword: string;
    userDictionary: IRootDictionary[]
}

export interface IAPIRoutes {
    addUser: String,
    findAllUsers: String,
    addNewWord: String,
    findOneUser: String
}

// grammar
export interface INounDeclensionHeaders {
    nounsTitle: string[]
}

export interface IImperativweMood {
    ruleUkr: string 
    ruleEn: string 
    example: string,
    fullExample?: string
}

interface ISIngleNoun {
    questions : string,
    questionEng: string,
    ukrName: string,
    engName: string
}

export interface IChangeFormCommon {
    ukr: string,
    eng: string
}

export interface IBeAndHaveRules {
    head: {
        ukr : string[],
        eng: string[]
    },
    body: string[][]
}

export interface IChangeFormsParticularCases {
    exampleUkr: string,
    exampleEng: string,
    cases: IChangeFormCommon[]
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
