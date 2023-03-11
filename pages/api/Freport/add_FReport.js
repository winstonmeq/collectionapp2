import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import FReport from "../../../models/FReport";


export default async function handler(req, res) {

        try {

        const { datalist2 } = req.body;

 
         await dbConnect();  

         
      //    const datalistWithReportNum = datalist.map((data) => {
      //     return {
      //         ...data,
      //         reportNum: 'report123',
      //     };
      // });

         
         for (const data2 of datalist2) {
          // Create a new instance of the LCRdata model
          const saveData = new FReport(data2);
          // Save the data to the database      
          await saveData.save();
      }
    
           
       res.status(200).json({ message: 'Final Report Data saved successfully' });


      } catch (error) {
        // Send an error response
        res.status(500).json({ error: 'Unable to save Final Report data' });

      }

      finally {

        console.log('close the database connection')
        // Close the database connection
        //mongoose.connection.close();
    }
  
  }



