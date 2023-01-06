import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import Cedula from "../../../models/Cedula";


export default async function handler(req, res) {

  

      try {

      const { cedula_no, date, year,place_issue,full_name,full_add,place_birth,date_birth,nationality,status,height,weight,male,
             female, single, married, widow, divorced, profession, amount1, amount2,amount2R, amount3,amount3R, amount4,amount4R,
             interest, total, num_word} = req.body;

 


      await dbConnect();   


      const cedula = new Cedula({
        cedula_no:cedula_no,
        year:year,
        date:date,
        place_issue:place_issue,
        full_name:full_name,
        full_add:full_add,
        place_birth: place_birth,
        date_birth: date_birth,
        nationality: nationality,
        status: status,
        height: height,
        weight: weight,
        male: male,
        female: female,
        single: single,
        married: married,       
        widow: widow,
        divorced: divorced,
        profession: profession,
        amount1: amount1,
        amount2: amount2,
        amount2: amount2R,
        amount3: amount3,
        amount2: amount3R,
        amount4: amount4,
        amount2: amount4R,
        interest: interest,
        total: total,
        num_word: num_word,
        userId: '635684a1d9f90d0fed02ca51'
      });

      const saveCedula = await cedula.save();
  
      if (saveCedula) {

        // const userDoc = saveUser._doc;
        // delete userDoc.password;

        responseHandler(saveCedula, res);
        
        
      } else {

        errorHandler("Something went wrong", res);

      }
        
  


      } catch (error) {
        errorHandler(error, res);
      }
  
  }



