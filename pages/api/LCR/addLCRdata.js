import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import LCRdata from "../../../models/LCRdata";


export default async function handler(req, res) {

  

      try {

      const { name, amount, type} = req.body;

      console.log('dsfsdf')

       await dbConnect();   

      const lcr = new LCRdata({
        name:name,
        amount:amount,
        type:type,
        userId: '635684a1d9f90d0fed02ca51'
      });

      const save = await lcr.save();
  
      if (save) {

        // const userDoc = saveUser._doc;
        // delete userDoc.password;

        res.status(200).json(save)
        
      } else {

        errorHandler("Something went wrong", res);

      }
        
  


      } catch (error) {
        errorHandler(error, res);
      }
  
  }



