import React from 'react'

export default function Child({ abc, def }) {

    function handleClick() {
        abc(true);
    };

    return (
        <div>
            <button onClick={handleClick}>Yo yo yo change parent</button>
        </div>
    )
}
