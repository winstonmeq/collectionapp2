
import mongoose from "mongoose";

const LCRdataSchema = mongoose.Schema({
    
    

    name: {
        type:String,        
        index: true,

    },
  

    amount: {
        type:Number,        
        index: true,

    },

    type: {
        type:String,       
        index: true,

    },
   
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",        
    // },

},{

    timestamps: true,

});



export default mongoose.models.LCRdata || mongoose.model('LCRdata', LCRdataSchema);