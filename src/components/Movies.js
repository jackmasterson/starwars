import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';

class Movies extends Component {
    formatDate(unformattedDate) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let f = new Date(unformattedDate).toDateString();
        let split = f.split(' ');
        for (let day of days) {
            if (day.indexOf(split[0]) > -1) {
                return `${day} ${split[1]} ${split[2]}, ${split[3]}`;
            }
        }
       
    }
    render() {
        return (
            <div className="movies">
                <Carousel
                    pauseOnHover={true}
                >
                {this.props.movies.map(movie => {
                    let formattedDate = this.formatDate(movie.release_date);
                    return (
                        <Carousel.Item className="movie"
                            key={movie.episode_id}>
                            <h4>{movie.title}</h4>
                            <p>Release Date: {formattedDate}</p>
                            <p className="small-par narrow">Synopsis: {movie.opening_crawl}</p>
                        </Carousel.Item>
                    )
                })}
                </Carousel>
            </div>
        )
    }
}

export default Movies;