// business logic
const { response } = require('express');

const plantController = {};
const plantsInfo = {};
let nextId = 0;

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

    plantsInfo[nextId] = body;
    console.log("checking plants Info", plantsInfo);

    res.locals.message = {
        message: 'You have successfully added a plant! Hooray.',
        id: nextId,
    }
    nextId++;
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
plantController.updatePlant = (req, res, next) => {
    console.log("Checking to see if I am in the updatePlant");
    let id = req.params.id;
    let plant = plantsInfo[id];
    const body = { ...req.body };
    res.locals.newPlantObj = Object.assign(plant, body);
    console.log(res.locals.newPlantObj);
    next();
}

// delete a plant per client's request
plantController.deletePlant = (req, res, next) => {
    console.log("checking to see if I am inside the deletePlant Section");
    let id = req.params.id;
    let plantToDelete = plantsInfo[id];
    const body = { ...req.body };
}


// Export Controller
module.exports = plantController;