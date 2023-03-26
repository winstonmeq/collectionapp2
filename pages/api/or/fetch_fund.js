import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import ORdata from "../../../models/ORdata";


export default async function handler(req, res) {

  

      try {

         const {orFund,orType,userId} = req.body;


       await dbConnect();  
   
           
        const getdata = await ORdata.aggregate([
            
            { 
                $match : { userId: require('mongoose').Types.ObjectId(userId), orUse:0, orFund:orFund, orType:orType}, 
            },
          
      
  
                                         
    
        ]).exec();
          
       res.status(200).json(getdata);


      } catch (error) {
        // Send an error response
        res.status(500).json({ error: 'Unable to save data' });

      }

      finally {
        // Close the database connection
        //mongoose.connection.close();
    }
  
  }



