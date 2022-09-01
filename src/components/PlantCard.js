import React from 'react';

class PlantCard extends React.Component {
    render() {
        console.log('entering here.')
        return (
            <div>
                <h3>{this.props.name}</h3>
                <div><b>Water Date:</b> {this.props.water}</div>
                <div><b>Repot Date:</b>{this.props.repot}</div>
                <div><b>Fertilize Date:</b>{this.props.fertilize}</div>
            </div>
        );
    };
}

export default PlantCard;






















//             <button className="square" onClick={function () { console.log('click'); }}></button>