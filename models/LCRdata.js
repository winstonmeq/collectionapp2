
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
  
    userlevel:{
        type:Number, 
        index:true,            
        trim:true
    }

},{

    timestamps: true,

});



export default mongoose.models.LCRdata || mongoose.model('LCRdata', LCRdataSchema);