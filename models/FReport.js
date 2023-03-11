
import mongoose from "mongoose";

const FReportSchema = mongoose.Schema({
    
    reportNum: {
        type:String,
       
    },
    
    orGenId: {
        type:String,        

    },
  
    formType: {
        type:String,        

    },

    orFund: {
        type:String,       
       
    },


    orDate: {
        type:Date,
    },  

    
    qty1: {
        type:Number,

    },  

    bgFrom: {
        type:Number,        
    },

    bgTo: {
        type:Number,        
    },

    qty2: {
        type:Number,
    },  

    rcFrom: {
        type:Number,        
    },

    rcTo: {
        type:Number,        
    },

    qty3: {
        type:Number,
    },  

    isFrom: {
        type:Number,        
    },

    isTo: {
        type:Number,        
    },

    qty4: {
        type:Number,
    },  

    ebFrom: {
        type:Number,        
    },

    ebTo: {
        type:Number,        
    },     

    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },

},{

    timestamps: true,

});



export default mongoose.models.FReport || mongoose.model('FReport', FReportSchema);