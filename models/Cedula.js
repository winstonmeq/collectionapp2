
import mongoose from "mongoose";

const CedulaSchema = mongoose.Schema({
    
    cedula_no:{
        type:String,
        required:true,
        trim:true
    },    
    year:{
        type:Number,
        required:true,
        trim:true

    },
    place_issue:{
        type:String,
        required:true,      
        trim:true
    },
    
    date:{
        type:String,
        required:true,      
        trim:true
    },
    full_name:{
        type:String,
        required:true,      
        trim:true
    },
    full_address:{
        type:String,
        required:true,      
        trim:true
    },
    nationality:{
        type:String,
        required:true,      
        trim:true
    },
    icr_no:{
        type:String,
        required:true,      
        trim:true
    },
    place_birth:{
        type:String,
        required:true,      
        trim:true
    },

    place_birth:{
        type:String,
        required:true,      
        trim:true
    },


    height:{
        type:String,
        required:true,      
        trim:true
    },


    status:{
        type:String,
        required:true,      
        trim:true
    },


    date_birth:{
        type:String,
        required:true,      
        trim:true
    },


    weight:{
        type:String,
        required:true,      
        trim:true
    },

    profession:{
        type:String,
        required:true,      
        trim:true
    },


    amount1:{
        type:Number,
        required:true,      
        trim:true
    },

    amount2:{
        type:Number,
        required:true,      
        trim:true
    },


    amount3:{
        type:Number,
        required:true,      
        trim:true
    },


    amount4:{
        type:Number,
        required:true,      
        trim:true
    },


    amount5:{
        type:Number,
        required:true,      
        trim:true
    },

    total:{
        type:Number,
        required:true,      
        trim:true
    },


    interest:{
        type:Number,
        required:true,      
        trim:true
    },

    total_amount:{
        type:Number,
        required:true,      
        trim:true
    },
 

    num_words:{
        type:String,
        required:true,      
        trim:true
    },
   

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },



},{

    timestamps: true,

});



export default mongoose.models.Cedula || mongoose.model('Cedula', CedulaSchema);