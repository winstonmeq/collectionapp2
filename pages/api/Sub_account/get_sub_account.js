import { dbConnect } from "../../../conn/dbconnect";
import { errorHandler, responseHandler } from "../../../util/common";
import SubAccount from "../../../models/Sub_account";

export default async function handler(req, res) {
  try {
    await dbConnect();

    const getdata = await SubAccount.aggregate([
     
      {
        $lookup: {
          from: "accounts",
          localField: "account_id",
          foreignField: "_id",
          as: "data2",
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
