import React, { useState } from 'react'
import Child from './Child';

export default function Parent() {

    const [mammaMia, setMammaMia] = useState(false);


    return (
        <div>
            {mammaMia == true && <p>Hej hej hej</p>}
            <p>Mamma Mia is: {mammaMia.toString()}</p>
            <Child abc={setMammaMia} def={mammaMia} />
        </div>
    )
}
