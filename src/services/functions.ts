import { IRootDictionary } from "../utils/types";

export const doShuffle = (array: IRootDictionary []): IRootDictionary[] => {
    const copyOfArray = [...array].sort(() => Math.random() - 0.5).slice(0,10);
    return copyOfArray;
}
