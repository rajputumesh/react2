import React from 'react';

const SearchBox = ({searchFeild, searchItem}) =>{
    return(
        <div className="ma2 pa2">
            <input className='pa2 w-30' type='text' onChange={searchItem} placeholder='Search Robots'/>
        </div>
    );
}

export default SearchBox;