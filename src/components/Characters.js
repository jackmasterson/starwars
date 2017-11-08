import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Characters extends Component {

    render() {
        return (
            <div className="nav">
                {this.props.characters.map(character => {
                    return (
                        <Button 
                            bsStyle="primary" 
                            bsSize="large"
                            className="nav-item"
                            key={character.url}
                            {...character}
                            onClick={() => this.props.handleClick(character)}
                        >
                            {character.name}
                        </Button>
                    )
                })}
            </div>
        )
    }
}

export default Characters;