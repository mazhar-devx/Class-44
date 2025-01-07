import {useState} from 'react'
import Button from '../../ui/Button/Button'

const Example2 =()=>{
    const [name , setName] = useState("Muddassir");
    const updateName = ()=>{
        setName("Muddassir Aslam");
    };
    return(
        <div>
            <p>Name: {name}</p>
            <Button onClick={updateName}>Change Name</Button>
        </div>
    )
}

export default Example2;