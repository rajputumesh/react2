import React from 'react';

const Gallery = ({robot}) =>{
    return(
        <div className="ma2 pa2 tc bg-white">
            <img alt={robot.name} src={`https://robohash.org/${robot.id}`} />
            <p className='pt1 ma0'>{robot.name}</p>
            <p className='pa1 ma0'>{robot.email}</p>
        </div>
    );
}

export default Gallery;