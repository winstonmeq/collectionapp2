
import mongoose from "mongoose";

const PaymentSchema = mongoose.Schema({
    
    

    transacId: {
        type:String,
        required:true,        
        index: true,
        unique:true

    },

    orGenId: {
        type:String,
        required:true,        
    },

    orType: {
        type:String,       
       
    },

    orFund: {
        type:String,       
       
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