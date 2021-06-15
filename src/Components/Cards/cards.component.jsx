import React from 'react';
import '../Cards/cards.styles.css'

export const Card = props =>{

  return  <div className='card-container'>
       <img alt="users" src={`https://robohash.org/${props.uname.id}?set=set3&size=180x180`}></img>
        <h1>{props.uname.name}</h1>
        <p>{props.uname.email}</p>
    </div>
};