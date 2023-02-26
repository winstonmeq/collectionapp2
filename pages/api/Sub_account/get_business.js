import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import SubAccount from "../../../models/Sub_account";


export default async function handler(req, res) {

  

      try {

        const { id } = req.body;

      console.log(' get payment api result',{id})

       await dbConnect();  
       
      
       const getdata = await SubAccount.aggregate([
            
        { 
            $match : { userId: require('mongoose').Types.ObjectId('63e4484b3a663c0b8d277141')}, 

        },

        {                
            $lookup: {
                from: 'accounts',
                localField: 'account_id',
                foreignField: '_id',
                as: 'data2'
            }

        },

        {
            $group: {
              _id: '$data2.account_name',
              sub_account_name: {$push:'$sub_account_name'},
           
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



