
import mongoose from "mongoose";

const LabdataSchema = mongoose.Schema({
    
    

    transacId: {
        type:String,        
        index: true,
         
    },
  

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
   
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },

},{

    timestamps: true,

});



export default mongoose.models.Labdata || mongoose.model('Labdata', LabdataSchema);