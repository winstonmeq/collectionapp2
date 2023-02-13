import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import ORdata from "../../../models/ORdata";
import Payment from "../../../models/Payment";


export default async function handler(req, res) {

  

      try {

    //     const {id} = req.query;

    //   console.log(' payment api transacId ang',id)

       await dbConnect();  
   
           
        const getdata = await ORdata.aggregate([
            
            { 
                $match : { userId: require('mongoose').Types.ObjectId('63e4484b3a663c0b8d277141')}, 
            },

            
            {
                $group: {
                  _id: '$orBooklet',
                  orType: { $first: '$orType' },
                  orBooklet: { $first: '$orBooklet' },
                  orUse: { $push: '$orUse' },
                  orNumber: { $push: '$orNumber' },
                
                }
              },


            {

                $project:{
                    _id:0,
                    orType:'$orType',
                    orBooklet:'$orBooklet',
                    orNumber:'$orNumber',
                    orUse:'$orUse',
                    orYes:{
                      $filter: {
                        input: '$orUse',
                        as: 'use',
                        cond: { $eq: ['$$use', 1] }
                      }
                    },               
                  
                      orNumberYes: {
                        $filter: {
                          input: "$orNumber",
                          as: "number",
                          cond: {
                            $eq: [ { $arrayElemAt: [ "$orUse", { $indexOfArray: [ "$orNumber", "$$number" ] } ] }, 1 ]
                          }
                        }
                      },

                      orNo:{
                        $filter: {
                          input: '$orUse',
                          as: 'use',
                          cond: { $eq: ['$$use', 0] }
                        }
                      },

                      orNumberNo: {
                        $filter: {
                          input: "$orNumber",
                          as: "number",
                          cond: {
                            $eq: [ { $arrayElemAt: [ "$orUse", { $indexOfArray: [ "$orNumber", "$$number" ] } ] }, 0 ]
                          }
                        }
                      },
                    


                    
                 
                }



            },

            // {
                
            //     $lookup: {
            //         from: 'payments',
            //         localField: 'orNumber',
            //         foreignField: 'orNumber',
            //         as: 'payments'
            //     }
                  
            // },
    

       
        

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



