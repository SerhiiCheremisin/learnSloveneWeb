import { IDeclensionNounsRules, INounDeclensionHeaders, INounQuestions } from "../utils/types"

export const nounDeclension: INounDeclensionHeaders = {
    nounsTitle : ["Відмінок", "Однина", "Двоїна", "Множина" ]
}

export const nounsQuestions: INounQuestions = {
    nominative : {
        questions : "Kdo - хто, kaj - що",
        ukrName: "Називний"
    },
    genitive : {
        questions : "Koga - кого, česa - чого",
        ukrName: "Родовий"
    },
    dative : {
        questions : "Komu - кому, čemu - чому",
        ukrName: "Давальний"
    },
    accusative : {
        questions : "Koga - кого, Kaj - що, Kam - куди",
        ukrName: "Знахідний"
    },
    locative : {
        questions : "Z kom - з ким,z čim - з чим",
        ukrName: "Орудний"
    },
    instrumental : {
        questions : "Kje - де, o kom - про кого, o čim - про що",
        ukrName: "Місцевий"
    }
};

export const nounDeclensionRules : IDeclensionNounsRules = {
     masculine: {
      declensions: {
        nominative : [ "- (Velik pes)", "a (Velika psa)", "i (Veliki psi)" ],
        genitive: [ "ega + a", "ih + ov/ev", "ih + ov/ev" ],
        dative: ["emu + u", "ima + oma/ ema(c, č, ž, š, j)", "im + om/ em (c, č, ž, š, j)"],
        accusative: ["є душа - ega + -a немає душі -", "a", "e"],
        locative: ["im + om/em (c, č, ž, š, j)", "ima + oma/ ema(c, č, ž, š, j)", "imi + i"],
        instrumental: ["em + u", "ih", "ih"],
      }
    } ,
    feminine : {
        declensions: {
            nominative : [ "a", "i", "e" ],
            genitive: [ "e (іноді i)", "ih + -", "ih + -" ],
            dative: ["i", "ima + ama/ima/ema", "im + am/im/em"],
            accusative: ["o", "i", "e"],
            locative: ["o + o/ojo", "ima + ama/ema", "imi + ami"],
            instrumental: ["i", "ih + ah/eh", "ih + ah/eh"],
          }
    } ,
   neuter : {
    declensions: {
        nominative : [ "o /e ", "i", "a" ],
        genitive: [ "ega + a", "ih + -", "ih + -" ],
        dative: ["emu + u", "ima + oma/ ema(c, č, ž, š, j)", "im + om/ em (c, č, ž, š, j)"],
        accusative: [ "o /e ", "i", "a" ],
        locative: ["im + om/em (c, č, ž, š, j)", "ima + oma/ ema(c, č, ž, š, j)", "imi + i"],
        instrumental: ["em + u", "ih", "ih"],
      }
    } 
}

export const verbDeclension = [
["Особа", "еперішній час (інфінітив - 'ti', ( + se* )" , "Минулий час ( інфінітив - 'ti')" , "Майбутній час ( інфінітив - 'ti')"],
["Jaz", "m" , "sem + L/La" , "bom + L/La"] , ["Ti", "š" , "si + L/La" , "boš + L/La"], 
["On, Ona, Ono", "-" , "je + L/La" , "bo + L/La"],
["Midva, Midve / Medve", "va" , "sva + La/Li" , "bova + La/Li"] ,["Vidva, Vidve / Vedve", "ta" , "sta + La/Li" , "bosta + La/Li"],
["Onadva, Onidve",  "ta" , "sta + La/Li" , "bosta + La/Li"], 
["Mi, Me", "mo" , "smo + Li/Le" , "bomo + Li/Le"],
["Vi, Ve", "te" , "ste + Li/Le" , "boste + Li/Le"],
["Oni , One* , Ona**", "jo" , "so + Li/Le/La" , "bojo/bodo + Li/Le/La"],
["Коли мова йде про групу тільки з жінок **тільки іменники середнього роду", "*Частка 'se' зазначає що дієслово має зворотну форму. (učiti se - навчатися)" ,
 "Умовна форма схожа на укр мову. Додаємо \"bi\" - Jaz bi vedel (я б бачив)  Заперечення формується як і у  теперішьому часі" , ""] ] 