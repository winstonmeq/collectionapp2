import { dbConnect } from "../../../conn/dbconnect";
import mongoose from "mongoose";
import LCRdata from "../../../models/LCRdata";

export default async function handler(req, res) {
  try {
    await dbConnect();

    // Delete the FReport table
    await LCRdata.deleteMany();

    res.status(200).json({ message: "FReport table deleted" });

  } catch (error) {

    res.status(500).json({ error: "Unable to delete FReport table" });

  } finally {

    // Close the database connection
    mongoose.connection.close();

  }
}
