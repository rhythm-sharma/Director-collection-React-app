import React from 'react';
import Card from './Card';

const CardList = ({directors}) => { 
    return(
        <div className='tc'>
         {
            directors.map((user, i) => {
                return(
                <Card key={i} 
                    id={directors[i].id}
                    name={directors[i].name}
                    birthname={directors[i].birthname} 
                    birthdate={directors[i].birthdate} 
                    birthplace={directors[i].birthplace}
                />)
            })
         } 
        </div>
    );
}


export default CardList;