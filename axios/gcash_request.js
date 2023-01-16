

import axios from "axios";
import { getValue } from "../util/common"



export const gcashurl = async (form) => {
    try {

        const res = await axios.post('https://g.payx.ph/payment_request', form);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}








