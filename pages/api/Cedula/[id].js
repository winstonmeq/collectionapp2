
import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import Cedula from "../../../models/Cedula";



export default async function handler(req, res) {


      try {
  
        const {id} = req.query;
  
        await dbConnect(); 
        
        console.log('id',id);
         
        const getdata = await Cedula.aggregate([
            
            { 
              $match : { _id: require('mongoose').Types.ObjectId(id)},
            },
                                    
    
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
  