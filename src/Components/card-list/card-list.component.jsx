import React from 'react';
import './card-list.styles.css';
import {Card} from '../Cards/cards.component';

export const CardList = props =>{

    return <div className='card-list'>
        {
        props.usersData.map( uname => (
            <Card key={uname.id} uname={uname}></Card>
        //<h1 key={uname.id}>{uname.name}</h1>
        ))
        }
        </div>;
};
