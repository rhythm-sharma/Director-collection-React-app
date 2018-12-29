import React from 'react';


const Card = (props) => {
    return(
        <div className='bg-light-green dib br3 pa3 ma2 w-20 grow bw2 shadow-5' style={{minHeight:400, maxHeight:400, minWidth:300, maxWidth:300}}>
            <img alt="photo" src={`https://robohash.org/${props.id}?size=200x200`} />
            <div>
                <h3>{props.name}</h3>
                <ul style={{textAlign: "left"}}>
                    <li>{props.birthname}</li>
                    <li>{props.birthdate}</li>
                    <li>{props.birthplace}</li>
                </ul> 
            </div>
        </div>
    );
}

export default Card;