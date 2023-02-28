import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import ORdata from "../../../models/ORdata";


export default async function handler(req, res) {

  

      try {

    //     const {id} = req.query;

   // console.log('updateOR',or_id, orType, orFrom, orTo, orNumber,orUse,  userId)

       const {orType, orFrom,orGenId,orGenId2, orTo, orNumber,orUse,orBB, userId } = req.body;

       await dbConnect();  
   
           
        const getdata = await ORdata.updateMany({orGenId:orGenId, orUse: 0},
        
        {
          $set:{
                  orType:orType,
                  orGenId:orGenId2,
                  orFrom:orFrom,
                  orTo:orTo,
                  orNumber:orNumber,
                  orUse:orUse,
                  orBB:orBB, 
                  userId: userId}
        
        
        
        }).exec();
          
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



