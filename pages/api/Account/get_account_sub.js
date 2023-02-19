import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import Account from "../../../models/Account";


export default async function handler(req, res) {

  

      try {

        const { id } = req.body;

      console.log(' get payment api result',{id})

       await dbConnect();  
       
      
       const getdata = await Account.aggregate([
            
        { 
            $match : { userId: require('mongoose').Types.ObjectId('63e4484b3a663c0b8d277141')}, 

        },
            
        {                
            $lookup: {
                from: 'sub_accounts',
                localField: '_id',
                foreignField: 'account_id',
                as: 'data2'
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



