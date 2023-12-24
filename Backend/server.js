const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

//Please remove these 2 and uncomment the comment block below when switching project to public:
const URL = 'mongodb+srv://anemoia:xlp1nL3l0q6GA697@cluster0.frfe2zj.mongodb.net/?retryWrites=true&w=majority';
const PORT = '3000';

/* 
dotenv is used to retrieve data from .env file
require('dotenv').config();    

//The URI & PORT is linked is under an .env file for security reasons     
const URL = process.env.DATABASE_URI || "";      
const PORT = process.env.PORT || "3001";       //If no .env, default to 3001
*/

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true         <-- this was giving me 'usecreateindex' errors.
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});


//uses static page with directory public. GOES TO HOMEPAGE
app.use(express.static(path.join(__dirname, '../Frontend/public')));

//Routing
//Testing Routing for /users
//app.use('/users', usersRouter);

//404 Error Page
app.use((req, res) => {
    res.status(404).send('404 Error: Page not found!');
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});