const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({encoded:true}));
require('./config/mongoose.config');

// app.use(express.urlencoded({encoded:true}));

const port = 8000;

require('./routes/product.routes')(app)

app.listen(port, () => {console.log(`Listening on port: ${port}`)});