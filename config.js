const dotenv = require('dotenv').config();

module.exports = {
    publicKey:process.env.PUBLIC_KEY,
    privateKey:process.env.PRIVATE_KEY,
    port:process.env.PORT
}