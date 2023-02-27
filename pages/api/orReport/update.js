import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import ORreport from "../../../models/ORreport";


export default async function handler(req, res) {

  

      try {

    //     const {id} = req.query;

   // console.log('updateOR',or_id, orType, orFrom, orTo, orNumber,orUse,  userId)

   const { orGenId, formType, orDate,  qty1, bgFrom, bgTo, qty2, rcFrom, rcTo, qty3, isFrom, isTo, qty4, ebFrom, ebTo, userId } = req.body;


       await dbConnect();  
   
           
        const getdata = await ORreport.updateOne({orGenId:orGenId},
        
        {

          $set:{
            formType:formType, 
            orDate:orDate,  
            qty1:qty1, 
            bgFrom:bgFrom, 
            bgTo:bgTo, 
            qty2:qty2, 
            rcFrom:rcFrom, 
            rcTo:rcTo, 
            qty3:qty3, 
            isFrom:isFrom, 
            isTo:isTo, 
            qty4:qty4, 
            ebFrom:ebFrom, 
            ebTo:ebTo, 
            userId:userId        
            }
        
        
        
        }).exec();
          
       res.status(200).json(getdata);


      } catch (error) {
        // Send an error response
        res.status(500).json({ error: 'Unable to save data' });

      }

      finally {
        // Close the database connection
        //mongoose.connection.close();
    }
  
  }



