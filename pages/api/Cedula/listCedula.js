import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import Cedula from "../../../models/Cedula";



export default async function handler(req, res) {

    if (req.method !== "POST") {

      errorHandler("Invalide Request Type is not a POST", res);
  
    } else {
  
      try {
  
        const {userId} = req.body;

        console.log({userId})
  
        await dbConnect(); 
        
        // console.log(userId);
         
        const getdata = await Cedula.aggregate([
            
            { 
              $match : { userId: require('mongoose').Types.ObjectId(userId)},
            },
            { 
              $sort : { createdAt: -1 } 
            }
            
                                    
    
        ]).exec();


        if(getdata){

             responseHandler(getdata, res)

        }else{

            errorHandler("Something went wrong", res)

        }
      } catch (error) {

        errorHandler(error, res);

      }
    }
  }
  