
import mongoose from "mongoose";

const ORForwardSchema = mongoose.Schema({
    
    
    orGenId: {
        type:String,        
        index: true,

    },
  
    orType: {
        type:String,        
        index: true,

    },

    orFund: {
        type:String,   
      
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



export default mongoose.models.ORForward || mongoose.model('ORForward', ORForwardSchema);