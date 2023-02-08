import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import User from "../../../models/User";
// import bcrypt from "bcrypt";


export default async function handler(req, res) {

       
      try {

      const { email,password,fname,lname,position,userlevel} = req.body;

      console.log('paylod1',email,password)

     // const hashPassword = await bcrypt.hash(password, 8);

      await dbConnect();   


      const user = new User({
        email,
        password, 
        fname,lname, position,      
        userlevel: 0,
      });

      const saveUser = await user.save();
  
      if (saveUser) {

        // const userDoc = saveUser._doc;
        // delete userDoc.password;

        responseHandler(saveUser, res);
        
        
      } else {

        errorHandler("Something went wrong", res);

      }
        
  


      } catch (error) {
        errorHandler(error, res);
      }
  
  }



