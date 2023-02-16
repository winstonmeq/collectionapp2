
import mongoose from "mongoose";

const AccountSchema = mongoose.Schema({
    
    

  
    account_name: {
        type:String,        
        index: true,

    },

    account_code: {
        type:String,
        required:true,        
    },  

    account_description: {

        type:String,
        required:true,       

    },
   
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },

},{

    timestamps: true,

});



export default mongoose.models.Account || mongoose.model('Account', AccountSchema);