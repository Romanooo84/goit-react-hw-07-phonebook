import { TextInput } from "./textinput"
import { UsersList } from "./users";
import { Filter } from "./filter";
import { useDispatch } from "react-redux";
import { addItem, deleteItem, filterItem} from "../redux/actions";

import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

export const App = () => {

    const dispatch = useDispatch();
    

    const [nameValue, setNameValue] = useState('');
    const [numberValue, setNumberValue] = useState('')
    const [name, setName] = useState()
    const [number, setNumber] =useState()

    const onChange = event => {
        event.preventDefault();
        
        if (event.target.name === 'name') {
            setNameValue(event.target.value);
            setName(event.target.value)
        }
        else if (event.target.name === 'number') {
            setNumberValue(event.target.value);
            setNumber(event.target.value)
        }

        else if (event.target.name === 'filter') {
            dispatch(filterItem(event.target.value));

        }
    
    };

    const onSubmit = event => {
        event.preventDefault();
        let userData = { id: nanoid(), name: name, number: number }
        dispatch(addItem(userData));
        setName()
        setNumber()
        setNameValue('')
        setNumberValue('')
    }

    const onClick=event=>{
        event.preventDefault();
        dispatch(deleteItem(event.target.parentNode.id));
    }

    return (
        <div>
            <TextInput onSubmit={onSubmit} onChange={onChange} nameValue={nameValue} numberValue={numberValue}/>
            <Filter onChange={onChange}/>
            <UsersList onClick={onClick}/>
        </div>
    )
}