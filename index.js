const dotenv = require('dotenv');
dotenv.config()
console.log('It works!');
console.log('New feature is logging');
console.log(`Using API_KEY \"${process.env.API_KEY}\"`)
secret_scanning_sample_token='secret_scanning_sample_token'
console.log(`Using API_KEY \"${secret_scanning_sample_token}\"`)
console.log(`Using API_KEY \"${process.env.AWS_SECRET_ACCESS_KEY}\"`)
