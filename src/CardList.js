import React from 'react';
import Card from './Card';

const CardList = ({directors}) => {
    const cardArray = directors.map((user, i) => {
         return(<Card id={directors[i].id} name={directors[i].name} birthname={directors[i].birthname} birthdate={directors[i].birthdate} birthplace={directors[i].birthplace}/>)
    })
    return(
        <div className='tc'>
         {cardArray} 
        </div>
    );
}


export default CardList;