import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import ORdata2 from "../../../models/ORdata2";


export default async function handler(req, res) {

  
//mao nih nga API route if ang data mo naka array nah.. mag nice sya
//kanang datalist array na so daghan na naka row nga data 

      try {

      const { datalist4 } = req.body;
  
      console.log('datalist4')

       await dbConnect();  
       
       for (const data of datalist4) {
        // Create a new instance of the LCRdata model
        const db = new ORdata2(data);
        // Save the data to the database      
        await db.save();
    }
           
    res.status(200).json({ message: 'Data saved successfully' });


      } catch (error) {
        console.error(error);
        // Send an error response
        res.status(500).json({ error: 'Unable to save data' });
      }

      finally {
        // Close the database connection
     //   mongoose.connection.close();
     
    }
  
  }



