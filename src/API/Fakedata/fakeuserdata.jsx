import Chance from "chance";

const chance = Chance();

export const fakeuserdata = () =>{
    return chance.name({ middle: true })
}