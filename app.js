require('dotenv').config();
let express = require('express');
let app = express();
let sequelize = require('./db');

app.listen(3000, function(){
    console.log('App is listening on 3000');
})

// CONTROLLERS GO HERE
let user = require('./controllers/usercontroller');
let location = require('./controllers/locationcontroller');

sequelize.sync();

app.use(require('./middleware/headers'));

app.use(express.json());

// EXPOSED ROUTE -- for user endpoints
app.use('/user', user);


// PROTECTED ROUTE -- for location enpoints
app.use(require('./middleware/validate-session'));
app.use('/location', location);

app.listen(process.env.PORT, function(){
    console.log(`homeward is listening on ${process.env.PORT} -- lets go home!`);
})