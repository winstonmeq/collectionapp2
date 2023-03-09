import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import Cedula from "../../../models/Cedula";



export default async function handler(req, res) {

   
      try {
  
       
        const { date1, date2 } = req.query;
     
  
        await dbConnect(); 
        
     
        const getdata = await Cedula.aggregate([
            
            
            { 
                $match : { 
                  
                  createdAt: {
                    $gte: new Date(date1),
                    $lte: new Date(date2)
                  },
                                    
                  userId: require('mongoose').Types.ObjectId('63e4484b3a663c0b8d277141')}, 
            },
           
                                    
    
        ]).exec();

        res.status(200).json(getdata);

      } catch (error) {

        res.status(500).json({ error: 'Unable to read data' });

        
      }

      finally {
        // Close the database connection
        //mongoose.connection.close();
    }



}
  
  