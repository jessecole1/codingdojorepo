// This is your backend server / project folder that will hold all server related files 

// In any file that will use the Mongoose library, you will need to be sure to require it at the top like this:
const mongoose = require('mongoose');

const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyUserRoutes = require('./routes/user.routes');
AllMyUserRoutes(app);

app.listen(8000, () => console.log('The server is all fired up on port 8000'));

// Go ahead and run the code using nodemon
//  nodemon server.js

// NOTE: If you receive the following warning when running your server, you can safely ignore it:

// DeprecationWarning: Listening to events on the Db class has been deprecated and will be removed in the next major version