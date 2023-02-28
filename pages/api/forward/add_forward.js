import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import ORForward from "../../../models/ORForward";


export default async function handler(req, res) {

        try {


        const { datalist } = req.body;


       await dbConnect();  

         
       for (const data of datalist) {
        // Create a new instance of the LCRdata model
        const datasave = new ORForward(data);
        // Save the data to the database      
        await datasave.save();
        }
          
                  
       res.status(200).json({ message: 'OR Data saved successfully' });


    } catch (error) {
        console.error(error);
        // Send an error response
        res.status(500).json({ error: 'Unable to save data' });
      }

      finally {
        // Close the database connection
        //mongoose.connection.close();
     
    }
  
  }



