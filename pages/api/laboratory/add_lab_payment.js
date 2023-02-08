import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import Labdata from "../../../models/Labdata";


export default async function handler(req, res) {

  
//mao nih nga API route if ang data mo naka array nah.. mag nice sya
//kanang datalist array na so daghan na naka row nga data 

      try {

      const { datalist } = req.body;

      console.log('api result',{datalist})

       await dbConnect();  
       
       for (const data of datalist) {
        // Create a new instance of the LCRdata model
        const lcr = new Labdata(data);
        // Save the data to the database      
        await lcr.save();
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



