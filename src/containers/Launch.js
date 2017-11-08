import React, {Component} from 'react';
import LaunchComponent from '../components/LaunchComponent';

class Launch extends Component {
    render() {
        return (
            <div className="App">
                <div className="header">
                    <h1>Pick your Star Wars Character</h1>
                    <h3>And watch the Force at work</h3>
                </div>
                <LaunchComponent/>
            </div>
        );
    }
}

export default Launch;