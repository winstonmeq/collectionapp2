import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import LCRdata from "../../../models/LCRdata";


export default async function handler(req, res) {

  

      try {

        const { date1, date2 } = req.query;

       await dbConnect();  
   
           
        const getdata = await LCRdata.aggregate([
            
            { 
                $match : { 
                  
                  createdAt: {
                    $gte: new Date(date1),
                    $lte: new Date(date2)
                  },
                                    
                  userId: require('mongoose').Types.ObjectId('63e4484b3a663c0b8d277141'), orFund:'GF'}, 
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
              _id: {transacId:"$transacId"},
              orNumber:{$push:"$data2.orNumber"},
              customer:{$push:"$data2.customerName"},
               name:{$push: "$name"},
               type:{$push:"$type"},
               amount:{$push: "$amount"},
               date:{$first: "$data2.createdAt"}
            
               } 
            },

         

            {

              $project:{
                  _id:0,
                  transacId:"$_id.transacId",                     
                  orNumber:1,
                  customer:1,
                  date:1,
                  Business: {
                    $reduce: {
                      input: {
                        $filter: {
                          input: "$amount",
                          as: "item",
                          cond: { $eq: [{ $arrayElemAt: ["$type", { $indexOfArray: ["$amount", "$$item"] }] }, "Business"] }
                        }
                      },
                      initialValue: 0,
                      in: { $add: ["$$value", "$$this"] }
                    }
                  },
                  FinesPenalty: {
                    $reduce: {
                      input: {
                        $filter: {
                          input: "$amount",
                          as: "item",
                          cond: { $eq: [{ $arrayElemAt: ["$type", { $indexOfArray: ["$amount", "$$item"] }] }, "Fines/Penalty"] }
                        }
                      },
                      initialValue: 0,
                      in: { $add: ["$$value", "$$this"] }
                    }
                  },
                  Mayors: {
                    $reduce: {
                      input: {
                        $filter: {
                          input: "$amount",
                          as: "item",
                          cond: { $eq: [{ $arrayElemAt: ["$type", { $indexOfArray: ["$amount", "$$item"] }] }, "Mayors"] }
                        }
                      },
                      initialValue: 0,
                      in: { $add: ["$$value", "$$this"] }
                    }
                  },


                  Garbage: {
                    $reduce: {
                      input: {
                        $filter: {
                          input: "$amount",
                          as: "item",
                          cond: { $eq: [{ $arrayElemAt: ["$type", { $indexOfArray: ["$amount", "$$item"] }] }, "Garbage"] }
                        }
                      },
                      initialValue: 0,
                      in: { $add: ["$$value", "$$this"] }
                    }
                  },

                  Medical: {
                    $reduce: {
                      input: {
                        $filter: {
                          input: "$amount",
                          as: "item",
                          cond: { $eq: [{ $arrayElemAt: ["$type", { $indexOfArray: ["$amount", "$$item"] }] }, "Medical"] }
                        }
                      },
                      initialValue: 0,
                      in: { $add: ["$$value", "$$this"] }
                    }
                  },

                  Occupation: {
                    $reduce: {
                      input: {
                        $filter: {
                          input: "$amount",
                          as: "item",
                          cond: { $eq: [{ $arrayElemAt: ["$type", { $indexOfArray: ["$amount", "$$item"] }] }, "Occupation"] }
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



