// business logic
const { response } = require('express');

const plantController = {};

const plantsInfo = [];

// this function will check to see if all the properties needed 
// are included in the request
function checkForProperties(obj, requiredProps) {
    for (prop of requiredProps) {
        if (!(prop in obj)) {
            return false;
        }
    }
    return true;
}


// create a controller where the user can add a plant to their profile
// the plant on their profile will have the following info: name, the date it was watered, repotted, and fertilized.
plantController.addPlant = (req, res, next) => {
    const requiredProperties = ['name', 'water', 'repot', 'fertilize'];
    const body = { ...req.body };

    if (!checkForProperties(body, requiredProperties)) {
        next({
            log: 'error inside plantController.addPlant',
            message: 'plantController.addPlant: ERROR: Incorrect data received',
        });
        return;
    }

    plantsInfo.push(body);
    // console.log("pushing into plant array", plantsInfo);
    res.locals.message = 'You have successfully added a plant! Hooray.';
    console.log("GET", plantsInfo);
    next();
}


// pulling all plants upon client request
plantController.getPlants = (req, res, next) => {
    console.log('checking to see if I entered my GET request (viewPlants)');
    res.locals.plantsInfo = plantsInfo;
    next();
}


// pulling a single plant upon client request
plantController.getPlant = (req, res, next) => {
    console.log('checking to see if I enter my updatePlant');
    let id = req.params.id;
    res.locals.plantInfo = plantsInfo[id];
    next();
}

// updating a single property per client's request
plantController.updateSection = (req, res, next) => {
    console.log("Checking to see if I am in the updateSection");
    let id = req.params.id;
    let plant = plantsInfo[id];
    const body = { ...req.body };
    res.locals.newPlantObj = Object.assign(plant, body);
    console.log(res.locals.newPlantObj);
    next();
}


// delete a plant per client's request



// Export Controller
module.exports = plantController;