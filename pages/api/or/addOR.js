import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import ORdata from "../../../models/ORdata";


export default async function handler(req, res) {

        try {

        const { orType, orFrom, orTo, orNumber,orUse, userId } = req.body;

      console.log(' OR data api result',{orType, orFrom, orTo, orNumber,orUse, userId})

       await dbConnect();  
       
        const orSave = new ORdata({orType, orFrom, orTo, orNumber,orUse, userId});
        // Save the data to the database      
        await orSave.save();
    
           
       res.status(200).json({ message: 'OR Data saved successfully' });


      } catch (error) {
        // Send an error response
        res.status(500).json({ error: 'Unable to save OR data' });

      }

      finally {

        console.log('close the database connection')
        // Close the database connection
        //mongoose.connection.close();
    }
  
  }



