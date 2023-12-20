import { EFFECT_DATA } from "../actionTypes/actionTypes";

const effectData = (data) =>{
    return{
        type : EFFECT_DATA,
        payload: data
    }
  
};
export default {effectData};