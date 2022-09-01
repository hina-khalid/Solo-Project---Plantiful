import React from 'react';
import PlantInput from './components/PlantInput.js'
import PlantCard from './components/PlantCard.js'
import DeletePlant from './components/DeletePlant.js'
import UpdatePlant from './components/UpdatePlant.js'
import logo from '../public/logo.png'


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
        this.setState({ plantCards: plant });
    }

    displayPlant() {
        let cards = [];
        for (const plantId in this.state.plantCards) {
            cards.push(<PlantCard key={plantId} {...this.state.plantCards[plantId]} />)
            cards.push(<UpdatePlant />)
            cards.push(<DeletePlant />)
        }
        return cards;
    }

    // deletePlant() {

    // }

    render() {
        return (
            // <Box color="white" bgcolor="palevioletred" p={1} >Plantiful</Box
            <div style={{ width: '400px', height: 'auto', paddingLeft: '500px', paddingRight: '500px' }}>
                <img src={logo} style={{ width: '400px', height: 'auto', paddingLeft: '5px' }} />
                <PlantInput addPlant={this.addPlant} />
                {this.displayPlant()}
            </div >
        );
    };
}

export default App; 