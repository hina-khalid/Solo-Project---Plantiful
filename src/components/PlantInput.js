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
        console.log(this.state);

        fetch('/plants', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => fetch('/plants', { method: 'GET', })) // .then function waits for the promise to resolve before moving on to the next .then
            .then(res => res.json())
            .then(data => {
                return this.props.addPlant(data) // returning the data back to the parent
            })
            .catch(err => console.log('favClicked: ERROR: ', err));
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ backgroundColor: '#dcb49c', textAlign: 'center' }}>
                <h2>Add your Plant!</h2>
                <div className='NameField'>
                    <b><label htmlFor='name'>Name:</label></b>
                    <input name='name' placeholder='Enter name' plantname={this.state.name} onChange={this.handleChange} />
                </div>
                <div className='NameField'>
                    <b><label htmlFor='water'>Water Date:</label></b>
                    <input name='water' placeholder='yyyy-mm-dd' water={this.state.name} onChange={this.handleChange} />
                </div>
                <div className='NameField'>
                    <b><label htmlFor='repot'>Repot Date:</label></b>
                    <input name='repot' placeholder='yyyy-mm-dd' repot={this.state.name} onChange={this.handleChange} />
                </div>
                <div className='NameField'>
                    <b><label htmlFor='fertilize'>Fertilize Date:</label></b>
                    <input name='fertilize' placeholder='yyyy-mm-dd' fertilize={this.state.name} onChange={this.handleChange} />
                </div>
                <button
                    type="button"
                    className="addPlant"
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