
import mongoose from "mongoose";

const ORdataSchema = mongoose.Schema({
    
    

  
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

    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },

},{

    timestamps: true,

});



export default mongoose.models.ORdata || mongoose.model('ORdata', ORdataSchema);