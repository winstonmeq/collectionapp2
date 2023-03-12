import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import DataReport from "../../../models/DataReport";


export default async function handler(req, res) {

  

      try {

       // const { date1, date2, } = req.query;
       const { reportName } = req.query;


       await dbConnect();  
   
           
        const getdata = await DataReport.aggregate([
            
            { 
                $match : { 
                  
                  // createdAt: {
                  //   $gte: new Date(date1),
                  //   $lte: new Date(date2)
                  // },
                                    
                  userId: require('mongoose').Types.ObjectId('63e4484b3a663c0b8d277141'), reportName:reportName}, 
            },
           

            {                
              $lookup: {
                  from: 'payments',
                  localField: 'transacId',
                  foreignField: 'transacId',
                  as: 'data2'
              }
  
          },
            { 
              $group: {
              _id: "$transacId",
              customer:{$push:"$data2.customerName"},
              orNumber:{$push:"$data2.orNumber"},
              orType:{$push:"$data2.orType"},


              Occupation: {$sum: {$cond:[{$eq:["$type", "Occupation"]}, "$amount",'']}},
              Medical: {$sum: {$cond:[{$eq:["$type", "Medical"]}, "$amount",'']}},
              Mayors: {$sum: {$cond:[{$eq:["$type", "Mayors"]}, "$amount",'']}}
            
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



