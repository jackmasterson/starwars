import React, {Component} from 'react';
import {characters} from '../static/characters';
import Characters from './Characters';
import Movies from './Movies';
import Error from './Error';
import Fetching from './Fetching';

class LaunchComponent extends Component {
    componentWillMount() {
        this.setState({
            characters,
            charReady: false,
        });
    }
    handleClick(data, characterName) {
        let name = characterName.toLowerCase();
        name = name.split(' ')[0];
        if (this.state[name]) {
            this.takeFromStore(name);
        } else {
            this.runFetchCharacters(data, name);
        }
    }

    runFetchCharacters(data, character) {
        const baseUrl = data;
        fetch(baseUrl, {
            type: 'get',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            this.setState({
                [character]: {
                    res,
                    movies: this.handleMovies(res.films, character),
                },
                selected: {
                    res,
                },
                selectedMovies: null,
                charReady: true,
                error: false,
            });
        })
        .catch((err) => {
            this.setState({
                error: true,
            });
        });
    }
    handleMovies(movieArray, character) {
        if (!this.state[character] || !this.state[character].movies) {
            return this.runFetchMovies(movieArray, character);
        } else {
            this.takeFromStore(character);
        }
    }
    runFetchMovies(movieArray, character) {
        let movies = [];
        let t = 0;
        for (let movie of movieArray) {
            fetch(movie, {
                type: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                return res.json();
            })
            .then((movie) => {
                movies.push(movie);

                if (t === movies.length) {
                    this.moviesBack(movies, character);
                    return movies;
                }
            });
            t++;
        }
    }
    moviesBack(movies, character) {
        this.setState({
            selectedMovies: movies,
            [character]: {
                res: this.state[character].res,
                movies: movies,
            }
        });
    }
    takeFromStore(name) {
        if (this.state[name] && this.state[name].movies) {
            this.setState({ 
                selected: {
                    res: this.state[name].res,
                    movies: this.state[name].movies
                },
                selectedMovies: this.state[name].movies,
                error: false,
            })
        }
    }
    render() {
        if (this.state.error) {
            return (
                <div>
                    <Characters
                        {...this.state.characters}
                        handleClick={(character) => this.handleClick(character.url, character.name)}
                    />
                    <Error />
                </div>
            )
        } else if (this.state.charReady && this.state.selectedMovies) {
            return (
                <div>
                    <Characters
                        {...this.state.characters}
                        handleClick={(character) => this.handleClick(character.url, character.name)}
                    />
                    <h2>{this.state.selected.res.name} was in...</h2>
                    <Movies 
                        movies={this.state.selectedMovies}
                    />
                </div>
            )
        } else if (this.state.selected) {
            return (
                <div>
                    <Characters
                        {...this.state.characters}
                        handleClick={(character) => this.handleClick(character.url, character.name)}
                    />
                    <div>
                        <Fetching 
                            name={this.state.selected.res.name}
                        />
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <Characters 
                        {...this.state.characters}
                        handleClick={(character) => this.handleClick(character.url, character.name)}
                    />
                </div>
            )
        }
    }
}

export default LaunchComponent;