import React, { Component } from 'react';

class Characters extends Component {

    render() {
        return (
            <div className="nav">
                {this.props.characters.map(character => {
                    return (
                        <button
                            className="nav-item" 
                            key={character.url}
                            {...character}
                            onClick={() => this.props.handleClick(character)}
                        >
                        {character.name}
                        </button>
                    )
                })}
            </div>
        )
    }
}

export default Characters;