import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import ORdata from "../../../models/ORdata";


export default async function handler(req, res) {

  

      try {

    //     const {id} = req.query;

   // console.log('updateOR',or_id, orType, orFrom, orTo, orNumber,orUse,  userId)

       const { orType, orFrom, orTo, orNumber,orUse,or_id, userId } = req.body;

       await dbConnect();  
   
           
        const getdata = await ORdata.updateOne({_id:or_id},
        
        {
          $set:{
                  orType:orType,
                  orFrom:orFrom,
                  orTo:orTo,
                  orNumber:orNumber,
                  orUse:orUse, 
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



