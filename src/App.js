import React, {Component} from 'react';
import CardList from './CardList';
import {directors} from './director';
import SearchBox from './SearchBox'
import './App.css';
import Scroll from './Scroll'


class App  extends Component {
    constructor(){
        super()
        this.state = {
            directors: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({directors : users}));
    }

    onsearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){ 
        const filterdirectors = this.state.directors.filter(directors => {
            return directors.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.directors.length === 0){
            return <h1>loading</h1>
        }else{
            return(
                <div className='tc'> 
                    <h1 className="f1">Directors</h1>
                    <SearchBox searchChange = {this.onsearchChange}/>
                    <Scroll>
                        <CardList directors={filterdirectors}/>
                    </Scroll>
                </div>
            );
        }
    }
}


export default App;