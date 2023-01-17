
import mongoose from "mongoose";

const LCRdataSchema = mongoose.Schema({
    
    

    name: {
        type:String,
        required:true,        
        index: true,

    },
  

    amount: {
        type:Number,
        required:true,        
        index: true,

    },

    type: {
        type:String,
        required:true,        
        index: true,

    },
   
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },

},{

    timestamps: true,

});



export default mongoose.models.LCRdata || mongoose.model('LCRdata', LCRdataSchema);