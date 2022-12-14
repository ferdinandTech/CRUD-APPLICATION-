import ('./config/dbConfig.js');
import express from 'express';
import saleRouter from './Routes/saleRoutes.js';

// import db from './config/dbconfig.js';
// try{
//     db.authentication();
//     console.log("connection successfully")
// }catch(error){
//     console.log("There was no error while trying to connect to the database.")

// }

const PORT = 2022;
const app = express();

app.use(express.json())
app.use('/api/v1', saleRouter)
app.listen(PORT, () => {
    console.log("Listening to port: " + PORT);
});