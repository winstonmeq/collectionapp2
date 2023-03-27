import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler, responseHandler } from "../../../util/common";
import DataReport from "../../../models/DataReport";

export default async function handler(req, res) {
  try {
    const { userId } = req.query;

    //   console.log(' payment api transacId ang',id)

    await dbConnect();

    const getdata = await DataReport.aggregate([
      {
        $match: { userId: require("mongoose").Types.ObjectId(userId) },
      },
      {
        $group: {
          _id: "$reportName",
          reportName: { $first: "$reportName" },
        },
      },
    ]).exec();

    res.status(200).json(getdata);
  } catch (error) {
    // Send an error response
    res.status(500).json({ error: "Unable to save data" });
  } finally {
    // Close the database connection
    //mongoose.connection.close();
  }
}
