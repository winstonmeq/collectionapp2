import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import ORreport from "../../../models/ORreport";

export default async function handler(req, res) {

  

      try {

    const {userId} = req.query;

     console.log('payment api userId',userId)

       await dbConnect();  
   
           
       const data = await ORreport.aggregate([
        {
          $match: {
            userId: require('mongoose').Types.ObjectId(userId)
           
          }
        },

        
        {
            $group: {
              _id: '$orGenId',
              orGenId: { $last: '$orGenId' },
              formType: { $last: '$formType' },
              orFund: { $last: '$orFund' },
              orDate: { $last: '$orDate' },
              qty1: { $last: '$qty1' },
              bgFrom: { $last: '$bgFrom' },
              bgTo: { $last: '$bgTo' },
              qty2: { $last: '$qty2' },
              rcFrom: { $last: '$rcFrom' },
              rcTo: { $last: '$rcTo' },
              qty3: { $last: '$qty3' },
              isFrom: { $last: '$isFrom' },
              isTo: { $last: '$isTo' },
              qty4: { $last: '$qty4' },
              ebFrom: { $last: '$ebFrom' },
              ebTo: { $last: '$ebTo' },
              userId: { $last: '$userId' },
              createdAt: { $last: '$createdAt' },
              updatedAt: { $last: '$updatedAt' },
            }
          },
          {
            $sort: { updatedAt: 1 }
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



