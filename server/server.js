//set up all basic routes here 
// backend file
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const plantRoute = require('./routes/plants')

app.use(express.json());

/**
 * handle parsing request body
 */
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../dist'))); //by adding express.static method we can serve all JavaScript, CSS, HTML, and even images.

// all requests to '/plants' endpoint
app.use("/plants", plantRoute);


function globalErrorHandler(err, req, res, next) {
    const defaultError = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign(defaultError, err);
    console.log('we are in our global error handler');
    console.log(errorObj.log);
    res.status(errorObj.status).send(errorObj.message);
}

app.use(globalErrorHandler);

// app.listen starts up our backend 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


module.exports = { app }