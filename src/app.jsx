import React from 'react';
import PlantInput from './components/PlantInput.js'
import PlantCard from './components/PlantCard.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plantCards: [],
        }
        this.addPlant = this.addPlant.bind(this);
    }

    addPlant(plant) {
        console.log(plant);
    }

    render() {
        return (
            // <Box color="white" bgcolor="palevioletred" p={1} >Plantiful</Box
            <div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}>
                < h1 > Plantiful </h1 >
                <PlantInput addPlant={this.addPlant} />
                <PlantCard />
            </div >
        );
    };
}

export default App; 