import { dbConnect } from "../../../conn/dbconnect";
import Account from "../../../models/Account";

export default async function handler(req, res) {
  try {
    await dbConnect();

    const getdata = await Account.find({}).exec();

    res.status(200).json(getdata);

  } catch (error) {
    // Send an error response
    res.status(500).json({ error });
  } finally {
    // Close the database connection
    //mongoose.connection.close();
  }
}
