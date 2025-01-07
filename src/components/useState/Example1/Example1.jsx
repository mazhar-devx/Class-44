import {useState} from 'react'
import Button from "../../ui/Button/Button"

const Example1 = ()=>{
    const [num , setCount] = useState(0);
    const updateNumber = ()=>{
        setCount(num + 1)
    }
    return(
        <div>
            <Button countent={num} onClick={updateNumber}/>
        </div>
    )
}

export default Example1;