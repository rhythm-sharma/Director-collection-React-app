import React from 'react';
import CardList from './CardList';
import {directors} from './director';
import SearchBox from './SearchBox'

const App = () => {
    return(
        <div className='tc'> 
        <h1>Directors</h1>
        <SearchBox />
        <CardList directors={directors}/>
        </div>
    );
}

export default App;