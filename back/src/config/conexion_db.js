const mysql = require('mysql2/promise')
const dotenv = require('dotyenv')
dotenv.config();

const pool = mysql.createpoll({
    host: Process.env.DB_HOST,
    user: Process.env.DB_USER,
    password: Process.env.DB_PASSWORD,
    database: Process.env.DB_NAME, || 'futbol_equipos'
    waitforConnections: true,
    connectionlimit: 10,
    queueLimit: 0
    
});
Medule.exports = pool;