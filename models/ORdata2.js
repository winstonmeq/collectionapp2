
import mongoose from "mongoose";

const ORdata2Schema = mongoose.Schema({
    
    

    reportName: {
        type:String,        
        index: true,
    },
    
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



export default mongoose.models.ORdata2 || mongoose.model('ORdata2', ORdata2Schema);