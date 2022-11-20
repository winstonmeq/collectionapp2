
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    
    

    email: {
        type:String,
        required:true,        
        index: true,
        unique:true

    },
    password:{
        type:String,
        required:true,
        trim:true

    },

    fname: {
        type:String,
        required:true,        
        index: true,
        unique:true

    },
    lname: {
        type:String,
        required:true,        
        index: true,
        unique:true

    },

    position: {
        type:String,
        required:true,        
        index: true,
        unique:true

    },
  
    userlevel:{
        type:Number, 
        index:true,            
        trim:true
    }

},{

    timestamps: true,

});



export default mongoose.models.User || mongoose.model('User', UserSchema);