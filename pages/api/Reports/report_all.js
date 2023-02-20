import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import Payment from "../../../models/Payment";


export default async function handler(req, res) {

  

      try {

    //     const {id} = req.query;

    //   console.log(' payment api transacId ang',id)

       await dbConnect();  
   
           
        const getdata = await Payment.aggregate([
            
            { 
                $match : { userId: require('mongoose').Types.ObjectId('63e4484b3a663c0b8d277141')}, 
            },
                 
            // {
            //     $group: {
            //       _id: 0,
            //       serviceType: { $push: '$serviceType' },
            //       amount: { $push: '$amount' },
            //     }
            //   },

                                         
    
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


