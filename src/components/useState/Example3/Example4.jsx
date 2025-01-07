import { useState } from "react";
import Button from '../../ui/Button/Button';
const Example4 =()=>{
    const [items , setItems] = useState(['Apple','Banana','Orange']);
    const addItem =()=>{
        setItems([...items, 'Grapes']);
    };
    return(
        <div>
            <ul>
                {items.map((item, index)=>{
                    <li key={index}>{item}</li>
                })}
            </ul>
            <Button onClick={addItem}>
                
                Add Graps
            </Button>
        </div>
    )
}
export default Example4;