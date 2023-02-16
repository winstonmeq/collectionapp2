import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import Sub_account from "../../../models/Sub_account";


export default async function handler(req, res) {

        try {

        const { sub_account_name, sub_account_code, sub_account_description,sub_account_fee, account_id, userId } = req.body;

      console.log('create sub account api result',{sub_account_name, sub_account_code, sub_account_description, sub_account_fee, account_id, userId})

       await dbConnect();  
       
        const add = new Sub_account({sub_account_name, sub_account_code, sub_account_description, sub_account_fee, account_id, userId});


        // Save the data to the database      
        await add.save();
    
           
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



