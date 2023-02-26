
import mongoose from "mongoose";

const ORreportSchema = mongoose.Schema({
    
    

  
    orType: {
        type:String,        
        index: true,

    },

    orBooklet: {
        type:String,
        required:true,        
    },  

    orFrom: {
        type:Number,        
        index: true,

    },

    
    orTo: {
        type:Number,        
        index: true,

    },

    orNumber: {
        type:Number,        
       
    },

    orUse: {
        type:Number,
    },

    orBB: {
        type:Number,
    },

    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },

},{

    timestamps: true,

});



export default mongoose.models.ORreport || mongoose.model('ORreport', ORreportSchema);