import React from 'react'

function Character (props) {
    return (
        <div className="characterCard">
            <h2>Name: {props.eachChar.name} </h2>
            <h2>Gender: {props.eachChar.gender}</h2>
            <h2>Height: {props.eachChar.height}</h2>
            <h2>Hair Color: {props.eachChar.hair_color}</h2>
        </div>
    )
}
export default Character;