import React, { Component } from 'react';

class Error extends Component {
    render() {
        return (
            <div className="App">
                <div className="narrow">
                    <h1>An error occurred.</h1>
                    <p>Try clicking around a bit more, and make sure you're connected to the Internet. If the error continues, it's probably on our end, and if that's the case, we're so sorry! Please note that the issue has been logged and we are working to improve your experience.</p>
                </div>
            </div>
        )
    }
}

export default Error;