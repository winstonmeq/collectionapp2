import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import ORreport from "../../../models/ORreport";


export default async function handler(req, res) {

        try {

        const { orGenId,orFund, formType, orDate,  qty1, bgFrom, bgTo, qty2, rcFrom, rcTo, qty3, isFrom, isTo, qty4, ebFrom, ebTo, userId } = req.body;


       await dbConnect();  
       
        const orSave = new ORreport({ orGenId, orFund, formType, orDate,  qty1, bgFrom, bgTo, qty2, rcFrom, rcTo, qty3, isFrom, isTo, qty4, ebFrom, ebTo, userId });
        
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



