import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import ORdata from "../../../models/ORdata";


export default async function handler(req, res) {
  

      try {

         const {or_id} = req.query;

    //   console.log(' payment api transacId ang',id)

       await dbConnect();  
   
           
       const getdata = await ORdata.deleteOne({_id: require('mongoose').Types.ObjectId(or_id) 
    })
                 
                
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



