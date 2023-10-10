import { IDeclensionNounsRules, INounDeclensionHeaders, INounQuestions, IImperativweMood, IChangeFormCommon, IChangeFormsParticularCases, IBeAndHaveRules } from "../utils/types"

export const nounDeclension: INounDeclensionHeaders = {
    nounsTitle : ["Відмінок", "Однина", "Двоїна", "Множина" ]
}

export const nounsQuestions: INounQuestions = {
    nominative : {
        questions : "Kdo - хто, kaj - що",
        questionEng: "Kdo - who, kaj - what",
        ukrName: "Називний",
        engName: "Nominative"
    },
    genitive : {
        questions : "Koga - кого, česa - чого",
        questionEng: "Koga - whom, česa - what",
        ukrName: "Родовий",
        engName: "Genitive"
    },
    dative : {
        questions : "Komu - кому, čemu - чому",
        questionEng: "Komu - to whom, čemu - for what",
        ukrName: "Давальний",
        engName: "Nominative"
    },
    accusative : {
        questions : "Koga - кого, Kaj - що, Kam - куди",
        questionEng: "Koga - whom, Kaj - what, Kam - where",
        ukrName: "Знахідний",
        engName: "Dative"
    },
    locative : {
        questions : "Z kom - з ким,z čim - з чим",
        questionEng: "Z kom - with whom, z čim - with what",
        ukrName: "Орудний",
        engName: "Locative"
    },
    instrumental : {
        questions : "Kje - де, o kom - про кого, o čim - про що",
        questionEng: "Kje - where, o kom - about whom, o čim - about what",
        ukrName: "Місцевий",
        engName: "Instrumental"
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

export const verbDeclension: string[][] = [
["Особа", "Теперішній час (інфінітив - 'ti', ( + se* )" , "Минулий час ( інфінітив - 'ti')" , "Майбутній час ( інфінітив - 'ti')"],
["Jaz", "m" , "sem + L/La" , "bom + L/La"] , ["Ti", "š" , "si + L/La" , "boš + L/La"], 
["On, Ona, Ono", "-" , "je + L/La" , "bo + L/La"],
["Midva, Midve / Medve", "va" , "sva + La/Li" , "bova + La/Li"] ,["Vidva, Vidve / Vedve", "ta" , "sta + La/Li" , "bosta + La/Li"],
["Onadva, Onidve",  "ta" , "sta + La/Li" , "bosta + La/Li"], 
["Mi, Me", "mo" , "smo + Li/Le" , "bomo + Li/Le"],
["Vi, Ve", "te" , "ste + Li/Le" , "boste + Li/Le"],
["Oni , One* , Ona**", "jo" , "so + Li/Le/La" , "bojo/bodo + Li/Le/La"],
["Коли мова йде про групу тільки з жінок **тільки іменники середнього роду", "*Частка 'se' зазначає що дієслово має зворотну форму. (učiti se - навчатися)" ,
 "Умовна форма схожа на укр мову. Додаємо \"bi\" - Jaz bi vedel (я б бачив)  Заперечення формується як і у  теперішьому часі" , ""] ] 

 export const verbDeclensionEng: string[][] = [
    ["Person", "Present tense (infinitive - 'ti', ( + se* )" , "Past tense (infinitive - 'ti')" , "Future tense (infinitive - 'ti')"],
    ["Jaz", "m" , "sem + L/La" , "bom + L/La"] , ["Ti", "š" , "si + L/La" , "boš + L/La"], 
    ["On, Ona, Ono", "-" , "je + L/La" , "bo + L/La"],
    ["Midva, Midve / Medve", "va" , "sva + La/Li" , "bova + La/Li"] ,["Vidva, Vidve / Vedve", "ta" , "sta + La/Li" , "bosta + La/Li"],
    ["Onadva, Onidve",  "ta" , "sta + La/Li" , "bosta + La/Li"], 
    ["Mi, Me", "mo" , "smo + Li/Le" , "bomo + Li/Le"],
    ["Vi, Ve", "te" , "ste + Li/Le" , "boste + Li/Le"],
    ["Oni , One* , Ona**", "jo" , "so + Li/Le/La" , "bojo/bodo + Li/Le/La"],
    ["When it comes to a group of only women **only neuter nouns", "*The part 'se' indicates that the verb has a reflexive form. (učiti se - to learn toyrself)" ,
     "With conditional form we add \"bi\" - Jaz bi vedel (I would see) The negation is formed as in the present tense" , ""] ] 


 export const imperativeMood: IImperativweMood[] = [
    { ruleUkr: "povabiti (запросити)", ruleEn: "povabiti (to invite)", example: "-im → -i/ite", fullExample: "povabim → povabi/povabite"},
    { ruleUkr: "prodati (продати)", ruleEn: "prodati (to sell)", example: "-am → -aj/ajte", fullExample: "prodajam → prodaj/prodajte"},
    { ruleUkr: "kazati (показати)", ruleEn: "kazati (to show)", example: "-em → -i/ite", fullExample: "kažem → kaži/kažite"},
    { ruleUkr: "potovati (подорожувати)", ruleEn: "potovati (to travel)", example: "(u)jem → -j/ujte", fullExample: "potujem → potuj/potujte"},
    { ruleUkr: "teči (бігати)", ruleEn: "teči (to run)", example: "-čem → -ci/cite", fullExample: "tečem → teci/tecite"}
 ]

 export const imperativeMoodIrregulars: IImperativweMood[] = [
    { ruleUkr: "biti (бути)", ruleEn: "biti (to be)", example: "jaz sem - bodi/bodite"},
    { ruleUkr: "gledati (дивитися)", ruleEn: "gledati (to watch, to look)", example: "jaz gledam - glej/glejte"},
    { ruleUkr: "imeti (мати)", ruleEn: "imeti (to have)", example: " jaz imam - imej/imejte"},
    { ruleUkr: "iti (йти)", ruleEn: "iti (to go)", example: "jaz grem - pojdi/pojdite"},
    { ruleUkr: "jesti (їсти)", ruleEn: "jesti (to eat)", example: " jaz jem - jej/jejte"},
    { ruleUkr: "najeti (найняти)", ruleEn: "najeti (to hire)", example: "jaz najamem - najemi/najemite"},
    { ruleUkr: "ostati (залишатися)", ruleEn: "ostati (to remain)", example: "jaz ostanem - ostani/ostanite"},
    { ruleUkr: "piti (пити)", ruleEn: "piti (to drink)", example: "jaz pijem - pij/pijte"},
    { ruleUkr: "pojeti (співати)", ruleEn: "pojeti (to sing)", example: "jaz pojem - poj/pojte"},
    { ruleUkr: "poklicati (кликати)", ruleEn: "poklicati (to call)", example: "jaz pokličem - pokliči/pokličite"},
    { ruleUkr: "povedati (розказати)", ruleEn: "povedati (to tell)", example: "jaz povem - povej/povejte"},
    { ruleUkr: "priti (прийти)", ruleEn: "priti (to come)", example: "jaz pridem - pridi/pridite"},
    { ruleUkr: "stati (стояти)", ruleEn: "stati (to stand)", example: " jaz ostanem - stoj/stojte"},
    { ruleUkr: "vedeti (знати)", ruleEn: "vedeti (to know)", example: "jaz vem - vedi/vedite"},
    { ruleUkr: "vzeti (взяти)", ruleEn: "vzeti (to take)", example: "jaz vzamem - vzemi/vzemite"}
 ]


 export const changeFormCommon : IChangeFormCommon[] = [
    {ukr: "do - (до)", eng: "do - (to)"},
    {ukr: "iz - (від)", eng: "iz - (from)"},
    {ukr: "na - (на)", eng: "na - (at)"},
    {ukr: "o - (про)", eng: "o - (about)"},
    {ukr: "ob - (в)", eng: "ob - (in)"},
    {ukr: "od - (від)", eng: "od - (from)"},
    {ukr: "po - (після)", eng: "po - (after)"},
    {ukr: "pod - (під)", eng: "pod - (under)"},
    {ukr: "pre - (теж)", eng: "pre - (too)"},
    {ukr: "pred - (перед)", eng: "pred - (before)"},
    {ukr: "pri - (після)", eng: "pri - (after)"},
    {ukr: "raz - (із)", eng: "raz - (from)"},
    {ukr: "s - (с)", eng: "s - (with)"},
    {ukr: "v - (в)", eng: "v - (in)"},
    {ukr: "za - (для)", eng: "za - (for)"}
 ]

 export const changeFormsParticularCases: IChangeFormsParticularCases[] = [
    {exampleUkr: "Pisati (писати)", exampleEng: "Pisati (to write)",  cases: [
        {ukr: "do + pisati = dopisati (дописати)", eng: "do + pisati = dopisati (to correspond)"},
        {ukr: "iz + pisati = izpisati (виписувати)", eng: "iz + pisati = izpisati (write out)"},
        {ukr: "na + pisati = napisati (написати)", eng: "na + pisati = napisati (to write down)"},
        {ukr: "pod + pisati = podpisati (підписати)", eng: "pod + pisati = podpisati (to sign)"},
        {ukr: "o + pisati = opisati (описати)", eng: "o + pisati = opisati (to describe)"},
        {ukr: "v + pisati = vpisati (зарахувати, записати)", eng: "v + pisati = vpisati (to enrol)"},
        {ukr: "od + pisati = odpisati (відповісти на лист)", eng: "od + pisati = odpisati (to write off)"},
        {ukr: "po + pisati = popisati (провести інвентаризацію)", eng: "po + pisati = popisati (to list)"},
        {ukr: "pre + pisati = prepisati (скопіювати)", eng: "pre + pisati = prepisati (to rewrite)"},
        {ukr: "pred + pisati = predpisati (прописувати)", eng: "pred + pisati = predpisati (to prescribe)"},
        {ukr: "pri + pisati = pripisati (зробити примітку)", eng: "pri + pisati = pripisati (to attribute)"},
        {ukr: "za + pisati = zapisati (записати)", eng: "za + pisati = zapisati (to note)"}
    ] }, 
    {exampleUkr: "Brati (читати)", exampleEng: "Brati (to read)",  cases: [
        {ukr: "iz + brati = izbrati (обирати)", eng: "iz + brati = izbrati (to choose)"},
        {ukr: "na + brati = nabrati (збирати)", eng: "na + brati = nabrati (to accumulate)"},
        {ukr: "o + brati = obrati (вибрати)", eng: "o + brati = obrati (pitch upon)"},
        {ukr: "po + brati = pobrati (підібрати)", eng: "po + brati = pobrati (pick up)"},
        {ukr: "pre + brati = prebrati (прочитати)", eng: "pre + brati = prebrati (to read)"},
        {ukr: "raz + brati = razbrati (робити висновок)", eng: "raz + brati = razbrati (to figure out)"}
    ] }, 
    {exampleUkr: "Pustiti (залишити, дозволити)", exampleEng: "Pustiti (Let go)",  cases: [
        {ukr: "do + pustiti = dopustiti (допускати)", eng: "do + pustiti = dopustiti (to allow)"},
        {ukr: "iz + pustiti = izpustiti (відпустити)", eng: "iz + pustiti = izpustiti (to release)"},
        {ukr: "o + pustiti = opustiti (відмовитися від)", eng: "o + pustiti = opustiti (give up)"},
        {ukr: "od + pustiti = odpustiti (пробачити)", eng: "od + pustiti = odpustiti (to forgive)"},
        {ukr: "po + pustiti = popustiti (розслабитися)", eng: "po + pustiti = popustiti (give way)"},
        {ukr: "pre + pustiti = prepustiti (залишити, відпустити)", eng: "pre + pustiti = prepustiti (to let go)"},
        {ukr: "raz + pustiti = razpustiti (розчинятися)", eng: "raz + pustiti = razpustiti (dissolve)"},
        {ukr: "s + pustiti = spustiti (розпускати, відпустити)", eng: "s + pustiti = spustiti (let down)"},
        {ukr: "za + pustiti = zapustiti (залишити, відмовитися від)", eng: "za + pustiti = zapustiti (to leave)"}
    ] }, 
    {exampleUkr: "Govoriti (говорити)", exampleEng: "Govoriti (to speak)",  cases: [
        {ukr: "do + govoriti = dogovoriti se (домовитися)", eng: "do + govoriti = dogovoriti se (agree)"},
        {ukr: "iz + govoriti = izgovoriti (вимовляти)", eng: "iz + govoriti = izgovoriti (pronounce)"},
        {ukr: "na + govoriti = nagovoriti (адресувати)", eng: "na + govoriti = nagovoriti (to address)"},
        {ukr: "od + govoriti = odgovoriti (відповісти)", eng: "od + govoriti = odgovoriti (to answer)"},
        {ukr: "po + govoriti = pogovoriti se (розмовляти)", eng: "po + govoriti = pogovoriti se (to talk)"},
        {ukr: "pre + govoriti = pregovoriti (переконувати, умовити)", eng: "pre + govoriti = pregovoriti (to persuade)"},
    ] }, 
    {exampleUkr: "Nesti (нести)", exampleEng: "Nesti (To lay)",  cases: [
        {ukr: "na + nesti = nanesti (застосовувати)", eng: "na + nesti = nanesti (to apply)"},
        {ukr: "ob + nesti = obnesti se (бути ефективним)", eng: "ob + nesti = obnesti se (behave)"},
        {ukr: "od + nesti = odnesti (проводити, виконати)", eng: "od + nesti = odnesti (take away)"},
        {ukr: "pre + nesti = prenesti (передати)", eng: "pre + nesti = prenesti (to transfer)"},
        {ukr: "pri + nesti = prinesti (принести)", eng: "pri + nesti = prinesti (to bring)"},
        {ukr: "v + nesti = vnesti (заходити, вставити)", eng: "v + nesti = vnesti (input)"},
        {ukr: "za + nesti = zanesti (відносити)", eng: "za + nesti = zanesti (get carried away)"}
    ] }
 ]

 export const beAndHaveRules: IBeAndHaveRules = {
    head: {
        ukr: ["", "BITI (Бути)", "Негативна форма", "IMETI (Мати)", "Негативна форма"],
        eng: ["","BITI (To be)", "Negative form", "IMETI (To have)", "Negative form"]
    },
    body: [
        ["Jaz", "sem", "nisem", "imam", "nimam"], 
        ["Ti", "si", "nisi", "imaš", "nimaš"], 
        ["On, Ona, Ono", "je", "ni", "ima", "nima"], 
        ["Midva, Midve / Medve", "sva", "nisva", "imava", "nimava"], 
        ["Vidva, Vidve / Vedve", "sta", "nista", "imata", "nimata"], 
        ["Onadva, Onidve", "sta", "nista", "imata", "nimata"], 
        ["Mi, Me", "smo", "nismo", "imamo", "nimamo"], 
        ["Vi, Ve", "ste", "niste", "imate", "nimate"], 
        ["Oni, One", "so", "niso", "imajo", "nimajo"]
    ]
 }

 export const beInTheFuture: string[][] = [
      ["Jaz", "bom" , "ne bom"],
      ["Ti", "boš" , "ne boš"],
      ["On, Ona", "bo" , "ne bo"],
      ["Midva, Medve", "bova" , "ne bova"],
      ["Vidva, Vedve", "bosta" , "ne bosta"],
      ["Onadva, Onidve", "bosta" , "ne bosta"],
      ["Mi, Me", "bomo" , "ne bomo"],
      ["Vi, Ve", "bosta" , "ne boste"],
      ["Oni, One", "bojo, bodo" , "ne bojo, ne bodo"],
 ]


