require('dotenv').config();

module.exports = {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/library',
    jwtSecret: process.env.JWT_SECRET || 's3cr3tKy#1LengStringWithSpecialCharacters',
    port: process.env.PORT || 5000,
};
