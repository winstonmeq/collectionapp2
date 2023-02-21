import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import LCRdata from "../../../models/LCRdata";


export default async function handler(req, res) {

  

      try {

    //     const {id} = req.query;

    //   console.log(' payment api transacId ang',id)

       await dbConnect();  
   
           
        const getdata = await LCRdata.aggregate([
            
            { 
                $match : { userId: require('mongoose').Types.ObjectId('63e4484b3a663c0b8d277141')}, 
            },

          //   {                
          //     $lookup: {
          //         from: 'payments',
          //         localField: 'transacId',
          //         foreignField: 'transacId',
          //         as: 'data2'
          //     }
  
          // },
            { 
              $group: {
              _id: {transacId:"$transacId" },
               type:{$push: "$type"},
               amount:{$push: "$amount"},
               } 
            },






        //   {
        //      $project: {
        //       _id: 0,
        //      type: 1,
        //      serviceType:"$_id.type",
        //       orNumber: "$_id.orNumber",
        //       amount: 1
        //   }
        // }

                                         
    
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



