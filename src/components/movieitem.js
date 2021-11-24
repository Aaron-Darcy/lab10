import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'; //for button from bootstrap
import axios from 'axios'; //axios import

// some comments
class MovieItem extends Component {
    
    //constructor for delete movie
    constructor(){
        super();

        //bind 
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    //delete movie method
    DeleteMovie(){
        console.log('Delete: '+this.props.movie._id); //to see click event and movie id deleted

        axios.delete('http://localhost:4000/api/movies/'+this.props.movie._id)
        .then(()=>{
            this.props.ReloadData()
        })//callback function
        .catch();

        

    }

    render() {
        return (
            <div>
                {/* some comments  */}
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.movie.Poster}></img>
                            <footer>
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
<Link to={"/edit/" +this.props.movie._id} className="btn btn-primary">Edit</Link>
<Button onClick={this.DeleteMovie}>Delete</Button>{/* Delete Button */} 
                </Card>
            </div>
        );
    }
}
export default MovieItem;