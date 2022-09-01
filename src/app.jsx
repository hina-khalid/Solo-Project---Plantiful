import React from 'react';
import PlantInput from './components/PlantInput.js'
import PlantCard from './components/PlantCard.js'


class App extends React.Component {
    render() {
        return (
            // <Box color="white" bgcolor="palevioletred" p={1} >Plantiful</Box
            <div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}>
                < h1 > Plantiful </h1 >
                <PlantInput />
                <PlantCard />
            </div >
        );
    }
}

export default App; 