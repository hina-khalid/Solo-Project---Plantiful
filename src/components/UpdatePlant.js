import React from "react";

class UpdatePlant extends React.Component {
    render() {
        return (
            <button
                type="button"
                className="updatePlant"
                onClick={this.handleUpdate}
            >
                Update Plant
            </button>
        );
    }
}

export default UpdatePlant;