
import mongoose from 'mongoose';

global.mongoose = {
    conn:null,
    promise:null
}


export async function dbConnect(){

    if(global.mongoose && global.mongoose.conn){

        console.log('connection all ready created');
     
         return global.mongoose.conn;
         
     }else {
     
         console.log('First time create new connection');

         //const connString = 'mongodb+srv://admin:admin123@cluster0.bi6qm.mongodb.net/attDB?retryWrites=true&w=majority'
         const connString = 'mongodb://localhost:27017/tresDB?retryWrites=true&w=majority'
         const promise = mongoose.connect(connString,{
     
             useNewUrlParser: true,
             useUnifiedTopology: true,
             autoIndex:true,
     
         }).then(mongoose => mongoose);
     
         global.mongoose = {
             conn: await promise,
             promise
         }
     
         return await promise
     
     }


}