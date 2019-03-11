import React from 'react';
import Character from './Character'

function CharacterTemplate(props) {
    return (
        props.starwarsChars.map(function (eachChar) {
            return <Character eachChar={eachChar}/>
        })
    )
};

export default CharacterTemplate;