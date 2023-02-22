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

            // {
            //   $match: {
                
            //       createdAt: { $gte: new Date("2023-02-21"), $lte: new Date("2023-02-21") },
               
            //   }
            // },

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
              _id: {transacId:"$transacId"},
              orNumber:{$push:"$data2.orNumber"},
              customer:{$push:"$data2.customerName"},
               name:{$push: "$name"},
               type:{$push:"$type"},
               amount:{$push: "$amount"},
            
               } 
            },

         

            {

              $project:{
                  _id:0,
                  transacId:"$_id.transacId",                     
                  orNumber:1,
                  customer:1,
                  MCR: {
                    $reduce: {
                      input: {
                        $filter: {
                          input: "$amount",
                          as: "item",
                          cond: { $eq: [{ $arrayElemAt: ["$type", { $indexOfArray: ["$amount", "$$item"] }] }, "MCR"] }
                        }
                      },
                      initialValue: 0,
                      in: { $add: ["$$value", "$$this"] }
                    }
                  },

                    Registration: {
                      $filter: {
                        input: "$amount",
                        as: "number",
                        cond: {
                          $eq: [ { $arrayElemAt: [ "$name", { $indexOfArray: [ "$amount", "$$number" ] } ] }, 'Registration Fee' ]
                        }
                      }
                    },


               

                  
               
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



