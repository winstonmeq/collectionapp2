import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import FReport from "../../../models/FReport";


export default async function handler(req, res) {

  

      try {

       const {userId} = req.query;

    //   console.log(' payment api transacId ang',id)

       await dbConnect();  
   
           
       const data = await FReport.aggregate([
        {
          $match: {
            userId: require('mongoose').Types.ObjectId(userId)
           
          }
        },
           {
            $group: {
              _id: '$reportNum',
              reportNum: { $first: '$reportNum' },
             
            }
          },



      ]).exec();
      
          
       res.status(200).json(data);


      } catch (error) {
        // Send an error response
        res.status(500).json({ error: 'Unable to save data' });

      }

      finally {
        // Close the database connection
        //mongoose.connection.close();
    }
  
  }



