// Codeblock 3
const express = require('express');

// Codeblock 6
const cors = require('cors');

const app = express();

// Codeblock 6
app.use(cors())

// PART II - Codeblock 5
app.use(express.json());
//  - this will allow JSON objects to be posted

app.use(express.urlencoded({encoded:true}));
//  - this allows JSON objects with strings and arrays

require('./config/mongoose.config');


// Codeblock 3
const port = 8001;
require('./routes/person.routes')(app); // We are importing the routes export

app.listen(port, () => console.log(`Listening on port: ${port}`));