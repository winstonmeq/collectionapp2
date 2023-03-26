import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import ORdata from "../../../models/ORdata";


export default async function handler(req, res) {

  

      try {

         const {userId}= req.query;

    //   console.log(' payment api transacId ang',id)

       await dbConnect();  
   
           
        const getdata = await ORdata.aggregate([
            
            { 
                $match : { userId: require('mongoose').Types.ObjectId(userId), orUse:0}, 
            },
          
          {
            $group: {
              _id: '$orGenId',
              orGenId: { $first: '$orGenId' },
              orType:{$first:'$orType'},
              orFund:{$first:'$orFund'},            
              orNumber: { $first: '$orNumber' },
              orTo: { $last: '$orTo' }
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



