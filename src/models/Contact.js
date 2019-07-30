const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ContactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,   
    },
    email:{
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

ContactSchema.plugin(mongoosePaginate);

mongoose.model('Contact', ContactSchema);