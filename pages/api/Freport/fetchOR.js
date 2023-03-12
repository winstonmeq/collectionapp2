import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import FReport from "../../../models/FReport";


export default async function handler(req, res) {

  

      try {

    //     const {id} = req.query;

    //   console.log(' payment api transacId ang',id)

       await dbConnect();  
   
           
        const getdata = await FReport.aggregate([
            
            { 
                $match : { userId: require('mongoose').Types.ObjectId('63e4484b3a663c0b8d277141')}, 
            },
            {
                
              $lookup: {
                  from: 'payments',
                  localField: 'orNumber',
                  foreignField: 'orNumber',
                  as: 'payments'
              }
                
          },

          {
            $unwind: '$payments'
          },
          {
            $group: {
              _id: '$orType',
              orType: { $first: '$orType' },
              firstORNumber: { $first: '$orNumber' },
              lastORNumber: { $last: '$orNumber' },
              totalAmount: { $sum: '$payments.amount' },
              orFund:{$first:'$orFund'},
            
              
            }
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



