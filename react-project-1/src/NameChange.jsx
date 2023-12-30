import { useState } from "react";

function ChangeName() {
    const names = ['Sushovan', 'Sujata', 'Raam', 'Shyam', 'Madhu'];

    const [firstName, setName] = useState('Sushovan');

    const randomName = () => {
        setName(names[Math.floor(Math.random() * names.length)]);
    };


    return (
        <>
            <p>Hi, I am {firstName}</p>
            <button onClick={randomName}>Click It</button>
        </>
    )
}

export default ChangeName;