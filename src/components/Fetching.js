import React, {Component} from 'react';

class Fetching extends Component {
    render() {
        return (
            <div className="App">
                Fetching {this.props.name} data...
            </div>
        )
    }
}

export default Fetching;