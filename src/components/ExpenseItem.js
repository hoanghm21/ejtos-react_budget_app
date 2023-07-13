import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti'
import { AiFillMinusCircle } from 'react-icons/ai'
import { BsPlusCircleFill } from 'react-icons/bs'
import { AppContext } from '../context/AppContext'

const ExpenseItem = (props) => {
    const {currency, dispatch} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><BsPlusCircleFill size='1.8em' color='#4EAE5B' onClick={event=> increaseAllocation(props.name)}></BsPlusCircleFill></td>
            <td><AiFillMinusCircle size='1.8em' color='#B01D11' onClick={event=> decreaseAllocation(props.name)}></AiFillMinusCircle></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;