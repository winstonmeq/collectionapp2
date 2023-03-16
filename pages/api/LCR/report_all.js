import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import LCRdata from "../../../models/LCRdata";


export default async function handler(req, res) {

  

      try {

       // const { date1, date2, } = req.query;
       const { Fundcode } = req.query;


       await dbConnect();  
   
           
        const getdata = await LCRdata.aggregate([
            
            { 
                $match : { 
                  
                                             
                  userId: require('mongoose').Types.ObjectId('63e4484b3a663c0b8d277141'), orFund:Fundcode}, 
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


              Business_Tax: {$sum: {$cond:[{$eq:["$type", "Business"]}, "$amount",'']}},
              Fines_Penalty: {$sum: {$cond:[{$eq:["$type", "Fines_Penalty"]}, "$amount",'']}},
              Garbage: {$sum: {$cond:[{$eq:["$type", "Garbage"]}, "$amount",'']}},
              Permit: {$sum: {$cond:[{$eq:["$type", "Permit"]}, "$amount",'']}},
              Civil: {$sum: {$cond:[{$eq:["$type", "Civil"]}, "$amount",'']}},
              Police: {$sum: {$cond:[{$eq:["$type", "Police"]}, "$amount",'']}},
              Locational: {$sum: {$cond:[{$eq:["$type", "Locational"]}, "$amount",'']}},
              Rental: {$sum: {$cond:[{$eq:["$type", "Rental"]}, "$amount",'']}},
              Certification: {$sum: {$cond:[{$eq:["$type", "Certification"]}, "$amount",'']}},
              Inspection: {$sum: {$cond:[{$eq:["$type", "Inspection"]}, "$amount",'']}},
              Medical: {$sum: {$cond:[{$eq:["$type", "Medical"]}, "$amount",'']}},
              Occupation: {$sum: {$cond:[{$eq:["$type", "Occupation"]}, "$amount",'']}},
              Mayors: {$sum: {$cond:[{$eq:["$type", "Mayors"]}, "$amount",'']}},
              Wt_Measure: {$sum: {$cond:[{$eq:["$type", "Wt.Measure"]}, "$amount",'']}},
              Doc_Stamp: {$sum: {$cond:[{$eq:["$type", "Doc_Stamp"]}, "$amount",'']}},
              Brgy_Clearance: {$sum: {$cond:[{$eq:["$type", "Brgy_Clearance"]}, "$amount",'']}},
              Sand_Gravel: {$sum: {$cond:[{$eq:["$type", "Sand_Gravel"]}, "$amount",'']}},
              Others: {$sum: {$cond:[{$eq:["$type", "Others"]}, "$amount",'']}},
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



