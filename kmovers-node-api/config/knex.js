require('dotenv').config();

const config = {
 
    client: 'pg',
    version: '8.15.0',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        port: process.env.DATABASE_PORT,
        database: process.env.DATABASE,
        password: process.env.DATABASE_USER_PASSWORD,
    
    },
    pool: { min: 0, max: 10 }

};
const knex = require('knex')(config);


knex.raw("SELECT 1").then (() => {
    console.log("Connection successful")

})
.catch ((err)=> {
    console.log("connection failed")
    console.error(err)
})


module.exports = knex;

