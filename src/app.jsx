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
        this.setState({ plantCards: plant });
    }

    displayPlant() {
        let cards = [];
        for (const plantId in this.state.plantCards) {
            cards.push(<PlantCard key={plantId} {...this.state.plantCards[plantId]} />)
        }
        return cards;
    }

    render() {
        return (
            // <Box color="white" bgcolor="palevioletred" p={1} >Plantiful</Box
            <div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}>
                < h1 > Plantiful </h1 >
                <PlantInput addPlant={this.addPlant} />
                {this.displayPlant()}
            </div >
        );
    };
}

export default App; 