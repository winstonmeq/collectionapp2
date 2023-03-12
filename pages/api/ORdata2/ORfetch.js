import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import ORdata2 from "../../../models/ORdata2";


export default async function handler(req, res) {

  

      try {

      const {report} = req.query;

    console.log(' payment api transacId ang',report)

       await dbConnect();  
   
           
        const data = await ORdata2.aggregate([
            
            { 
                $match : { userId: require('mongoose').Types.ObjectId('63e4484b3a663c0b8d277141'), reportName:report}, 
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
          
       res.status(200).json(data);


      } catch (error) {
        // Send an error response
        res.status(500).json({ error: 'Unable to save data' });

      }

      finally {
        // Close the database connection
        //mongoose.connection.close();
    }
  
  }



