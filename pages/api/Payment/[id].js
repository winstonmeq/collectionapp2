import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import Payment from "../../../models/Payment";


export default async function handler(req, res) {

  

      try {

        const {id} = req.query;

      console.log(' payment api transacId ang',id)

       await dbConnect();  
   
           
        const getdata = await Payment.aggregate([
            
            { 
                $match : { userId: require('mongoose').Types.ObjectId('635684a1d9f90d0fed02ca51')} && {transacId: id}, 
            },
            {                
                $lookup: {
                    from: 'lcrdatas',
                    localField: 'transacId',
                    foreignField: 'transacId',
                    as: 'data2'
                }
                  
<<<<<<< HEAD
            },
           
=======
            }           
>>>>>>> 8bbc07200949e9ded1a1cfd20fdcb083ff1f0074
                                    
    
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



