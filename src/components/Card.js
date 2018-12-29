import React from 'react';


const Card = (props) => {
    return(
        <div className='bg-light-green dib br3 pa3 ma2 w-20 grow bw2 shadow-5'>
            <img alt="photo" src={`https://robohash.org/${props.id}?size=200x200`} />
            <div>
                <h2>{props.name}</h2>
                <ul>
                    <li>{props.birthname}</li>
                    <li>{props.birthdate}</li>
                    <li>{props.birthplace}</li>
                </ul> 
            </div>
        </div>
    );
}

export default Card;