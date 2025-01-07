import { useState } from "react";
import Button from '../../ui/Button/Button';
const Example3 =()=>{
    const [user , setUser] = useState({
        name: 'Muddassir Aslam',
        age: 28,
    });
    const updateUser =()=>{
        setUser({...user, age:29});
    };
    return(
        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <Button onClick={updateUser}>Increase Age</Button>
        </div>
    )
}
export default Example3;