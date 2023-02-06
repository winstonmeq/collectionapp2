import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import Labdata from "../../../models/Labdata";


export default async function handler(req, res) {

  

      try {

        const { transacId, customerName, amount, orText, userId } = req.body;

      console.log(' Labdata api result',{transacId, customerName, amount, orText, userId})

       await dbConnect();  
       
        const pay = new payment({transacId, customerName, amount, orText, userId});
        // Save the data to the database      
        await pay.save();
    
           
       res.status(200).json({ message: 'Data saved successfully' });


      } catch (error) {
        // Send an error response
        res.status(500).json({ error: 'Unable to save data' });

      }

      finally {
        // Close the database connection
        //mongoose.connection.close();
    }
  
  }



