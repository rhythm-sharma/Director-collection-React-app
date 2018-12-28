import React, {Component} from 'react';
import CardList from './CardList';
import {directors} from './director';
import SearchBox from './SearchBox'
import './App.css';


class App  extends Component {
    constructor(){
        super()
        this.state = {
            directors: directors,
            searchfield: ''
        }
    }

    onsearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){ 
        const filterdirectors = this.state.directors.filter(directors => {
            return directors.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'> 
                <h1 className="f1">Directors</h1>
                <SearchBox searchChange = {this.onsearchChange}/>
                <CardList directors={filterdirectors}/>
            </div>
        );
    }
}


export default App;