import React from 'react';
import './wonder-list.styles.css';


export const WonderList = props =>{

    return <div className='wonder-list'>
        {
        props.wonders.map( wonder => (
            <h1 key={wonder.id}>{wonder.name}</h1>))
        }
        </div>;
};
