
import mongoose from "mongoose";

const Sub_accountSchema = mongoose.Schema({
    
    

  
    sub_account_name: {
        type:String,        
        index: true,

    },

    sub_account_code: {
        type:String,
        required:true,        
    },  

    sub_account_description: {

        type:String,
        required:true,       

    },

    sub_account_fee: {
        type:Number,
        required:true,        
    },  

    account_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",        
    },

       
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },

},{

    timestamps: true,

});



export default mongoose.models.Sub_account || mongoose.model('Sub_account', Sub_accountSchema);