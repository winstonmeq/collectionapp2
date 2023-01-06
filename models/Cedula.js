
import mongoose from "mongoose";

const CedulaSchema = mongoose.Schema({
    
    cedula_no:{
        type:String,
        required:true,
        trim:true
    },    
    year:{
        type:Number,
        trim:true

    },
    place_issue:{
        type:String,
        trim:true
    },
    
    date:{
        type:String,
        trim:true
    },
    full_name:{
        type:String,
        trim:true
    },
    full_add:{
        type:String,
        trim:true
    },

    male:{
        type:String,
        trim:true
    },


    female:{
        type:String,
        trim:true
    },

    nationality:{
        type:String,
        trim:true
    },

    icr_no:{
        type:String,            
        trim:true
    },
    place_birth:{
        type:String,
        trim:true
    },

   

    single:{
        type:String,
        trim:true
    },
    married:{
        type:String,
        trim:true
    },

    widow:{
        type:String,
        trim:true
    },

    divorced:{
        type:String,
        trim:true
    },



    date_birth:{
        type:String,
        trim:true
    },

     
    height:{
        type:String,
        trim:true
    },

    weight:{
        type:String,
        trim:true
    },
   

    profession:{
        type:String,
        trim:true
    },


    amount1:{
        type:Number,
        trim:true
    },

    amount2:{
        type:Number,     
        trim:true
    },

    amount2R:{
        type:Number,     
        trim:true
    },


    amount3:{
        type:Number,
        trim:true
    },

    amount3R:{
        type:Number,
        trim:true
    },



    amount4:{
        type:Number,
        trim:true
    },

    amount4R:{
        type:Number,
        trim:true
    },



    total:{
        type:Number,
        trim:true
    },


    interest:{
        type:Number,
        trim:true
    },
 

    num_word:{
        type:String,
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