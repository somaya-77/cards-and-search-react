import React from 'react';
import style from './Card.module.css';

const Card = (({cardsList, type, deletehandle}) => {
    // replaced {el.name}.........
    const cards = cardsList.map(({name,age, adress, phone}, index) => (
        <div className={style.cardWrapper} key={index} style={{backgroundColor: type === 'girl' ? 'pink' : 'gray'}}>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>adress: {adress}</div>
            <div>phone: {phone}</div>
            <div className={style.deleteCard} onClick={(event) => deletehandle(event,index)}>x</div>
        </div>
    ))
    return (
        <div>{cards}</div>
    )
})
export default Card;