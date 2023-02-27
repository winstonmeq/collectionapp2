
import mongoose from "mongoose";

const ORreportSchema = mongoose.Schema({
    
    

  
    formType: {
        type:String,        
        index: true,

    },

    orDate: {
        type:Date,
        required:true,        
    },  

    
    qty1: {
        type:Number,
        required:true,        
    },  

    bgFrom: {
        type:Number,        
        index: true,
    },

    bgTo: {
        type:Number,        
        index: true,
    },

    qty2: {
        type:Number,
        required:true,        
    },  

    rcFrom: {
        type:Number,        
        index: true,
    },

    rcTo: {
        type:Number,        
        index: true,
    },

    qty3: {
        type:Number,
        required:true,        
    },  

    isFrom: {
        type:Number,        
        index: true,
    },

    isTo: {
        type:Number,        
        index: true,
    },

    qty4: {
        type:Number,
        required:true,        
    },  

    ebFrom: {
        type:Number,        
        index: true,
    },

    ebTo: {
        type:Number,        
        index: true,
    },     

    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },

},{

    timestamps: true,

});



export default mongoose.models.ORreport || mongoose.model('ORreport', ORreportSchema);