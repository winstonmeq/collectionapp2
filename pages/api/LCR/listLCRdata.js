import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import LCRdata from "../../../models/LCRdata";



export default async function handler(req, res) {

    if (req.method !== "POST") {

      errorHandler("Invalide Request Type is not a POST", res);
  
    } else {
  
      try {
  
        const {userId} = req.body;
  
        await dbConnect(); 
        
        // console.log(userId);
         
        const getdata = await LCRdata.aggregate([
            
            { 
              $match : { userId: require('mongoose').Types.ObjectId('635684a1d9f90d0fed02ca51')},
            },
                                    
    
        ]).exec();


        if(getdata){

             //response(getdata)
             res.status(200).json(getdata)

        }else{

            errorHandler("Something went wrong", res)

        }
      } catch (error) {

        errorHandler(error, res);

      }
    }
  }
  