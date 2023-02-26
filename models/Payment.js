
import mongoose from "mongoose";

const PaymentSchema = mongoose.Schema({
    
    

    transacId: {
        type:String,
        required:true,        
        index: true,
        unique:true

    },

    orBooklet: {
        type:String,
        required:true,        
    },

    
    customerName:{
        type:String,
        required:true,      

    },

    orNumber: {
        type:Number,
        required:true,        
       

    },
    amount: {
        type:Number,
        required:true,        
       

    },

     
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },

},{

    timestamps: true,

});



export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);