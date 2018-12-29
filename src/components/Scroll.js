import React from 'react';

// how to use css in jsx =>  it is simple use double curly brackets "{{}}"

const Scroll = (porps) => {
    return(
        <div style={{overflowY : 'scroll' , border: '5px solid black', height: '800px'}}>
            {porps.children}
        </div>
    ) 
};

export default Scroll;