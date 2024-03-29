import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import Payment from "../../../models/Payment";
import LCRdata from "../../../models/LCRdata";


export default async function handler(req, res) {

  

      try {

        const {transacId, userId} = req.body;

      console.log(' payment api transacId',transacId)

       await dbConnect();  
       
           
       const sort = { createdAt: -1 };
       
    
        const getdata = await Payment.aggregate([
            
            { 
                $match : { userId: require('mongoose').Types.ObjectId('63e4484b3a663c0b8d277141')}, 


            },

            { 
              $sort : { createdAt: -1 } 
            }
            
                       
                                    
    
        ]).sort(sort);


          
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



