//set up all basic routes here 
// server -> plants -> controller 

// backend file
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const plantRoute = require('./routes/plants')

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

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