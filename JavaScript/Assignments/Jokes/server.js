console.log("hey");
const express = require('express');
const port = 8000;



const app = express();


require('./server/config/mongoose.config');


app.use(express.json(), express.urlencoded({
    extended:true
}));

const AllMyJokeRoutes = require('./server/routes/jokes.routes');
AllMyJokeRoutes(app);


app.listen(port, () => console.log('The server is all fired up on port 8000'));