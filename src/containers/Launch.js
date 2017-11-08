import React, {Component} from 'react';
import LaunchComponent from '../components/LaunchComponent';

class Launch extends Component {
    render() {
        return (
            <div className="App">
                <div className="header page-header">
                    <h1>Pick your Star Wars Character<small>  And watch the Force at work</small></h1>
                    
                </div>
                <LaunchComponent/>
            </div>
        );
    }
}

export default Launch;