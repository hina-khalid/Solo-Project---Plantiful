import React from "react";

class DeletePlant extends React.Component {
    render() {
        return (
            <button
                type="button"
                className="deletePlant"
                onClick={this.handleDelete}
            >
                Delete Plant
            </button>
        );
    }
}

export default DeletePlant;