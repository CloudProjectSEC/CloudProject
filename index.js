const dotenv = require('dotenv');
dotenv.config()
console.log('It works!');
console.log('New feature is logging');
console.log(`Using API_KEY \"${process.env.API_KEY}\"`)
