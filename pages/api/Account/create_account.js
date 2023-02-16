import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import Account from "../../../models/Account";


export default async function handler(req, res) {

        try {

        const { account_name, account_code, account_description, userId } = req.body;

      console.log('create account api result',{account_name, account_code, account_description, userId})

       await dbConnect();  
       
        const add = new Account({account_name, account_code, account_description, userId});


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



