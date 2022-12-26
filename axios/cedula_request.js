

import axios from "axios";
import { getValue } from "../util/common"



export const addCedula = async (form) => {
    try {

        const res = await axios.post(process.env.NEXTAUTH_URL + '/api/Cedula/addCedula', form);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}

export const listCedula = async (userId) => {
    try {

        const res = await axios.post(process.env.NEXTAUTH_URL + '/api/Cedula/listCedula',userId);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}


export const getCedulaNo = async (id) => {
    try {

        const res = await axios.get(process.env.NEXTAUTH_URL + `/api/Cedula/${id}`);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}











