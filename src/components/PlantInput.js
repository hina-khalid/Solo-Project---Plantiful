import React from 'react';

class PlantInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            water: '',
            repot: '',
            fertilize: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // should send a POST request to the backend
    // update the state with the information entered by the user 
    // send the updated state back to the parent that requested the info
    handleSubmit(event) {
        alert('A plant was added');

    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Plant Info</h3>
                <div className='NameField'>
                    <label htmlFor='name'>Name:</label>
                    <input name='name' placeholder='Enter name' plantname={this.state.name} onChange={this.handleChange} />
                </div>
                <div className='NameField'>
                    <label htmlFor='water'>Water date:</label>
                    <input name='water' placeholder='yyyy-mm-dd' water={this.state.name} onChange={this.handleChange} />
                </div>
                <div className='NameField'>
                    <label htmlFor='repot'>Repot date:</label>
                    <input name='repot' placeholder='yyyy-mm-dd' repot={this.state.name} onChange={this.handleChange} />
                </div>
                <div className='NameField'>
                    <label htmlFor='fertilize'>Fertilize:</label>
                    <input name='fertilize' placeholder='yyyy-mm-dd' fertilize={this.state.name} onChange={this.handleChange} />
                </div>
                <button
                    type="button"
                    className="btnMain customCharNickname"
                    onClick={this.handleSubmit}
                >
                    Add Plant
                </button>
            </form>
        );
    }
}

export default PlantInput;






















//             <button className="square" onClick={function () { console.log('click'); }}></button>