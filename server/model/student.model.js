import mongoose from 'mongoose'

let Student = new mongoose.Schema({
    Name:{
        type: String
    },

    BirthDate:{
        type:String
    },

    Hobbies:{
        type:String,
    },

    Address:{
        type:String 
    },

    Gender:{
        type:String
    },

    State:{
        type:String
    },

    Resume:{
        type: String
    }

})

export default mongoose.model('Student',Student)


