const mongoose = require('mongoose');
const config = require(' ../config/config');
const connectDB = async () =>{
    try{
        await mongoose.connect(config.mongoURI, {useNewUrlparser: true, useUnifiedTopology: true});
        console.log('MongoDB connected');

    } catch (error){
        console.error('MongoDB connection error:, error');
        process_params.exit(1)
    }
};
module.exports = connectDB;