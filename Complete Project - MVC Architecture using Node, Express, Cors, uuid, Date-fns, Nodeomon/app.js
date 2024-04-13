const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const {logger} = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');

const PORT = process.env.PORT || 4400;


//Custom middleare Logger
app.use(logger);

//Cross Origin Resource Sharing
app.use(cors(corsOptions));

//built-in middleare to handle urlencoded form data
app.use(express.urlencoded({extended:false}));

//builtin middleare for json
app.use(express.json());

//Serve Static Files --- To use CSS, Images, js files ETC
app.use('/',express.static(path.join(__dirname,'/public')));


//routes
app.use('/',require('./routes/root'));
app.use('/employees',require('./routes/api/employees'));


app.all('*', (req, res) => {
    res.status(404);

    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }

});

//Registered Error Handler..
app.use(errorHandler);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));