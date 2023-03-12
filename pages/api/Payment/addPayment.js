import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import Payment from "../../../models/Payment";


export default async function handler(req, res) {

        try {

        const { transacId, orFund, orType, customerName, amount,orGenId, orNumber, userId } = req.body;


       await dbConnect();  
       
        const pay = new Payment({
          
          transacId, 
          orFund,
          orType,
          customerName, 
          amount, 
          orGenId,
          orNumber, 
          userId
        });


        // Save the data to the database      
        await pay.save();
    
           
       res.status(200).json({ message: 'Data saved successfully' });


      } catch (error) {
        // Send an error response
        res.status(500).json({ error: 'Unable to save data' });
        console.log(error)

      }

      finally {

        console.log('close the database connection')
        // Close the database connection
        //mongoose.connection.close();
    }
  
  }



