import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return total += item.cost;
    }, 0);

    const setBudget = (val) => {
        if (val > 20000) {
            alert('The value cannot exceed remaining funds')
            return;
        }

        if (val < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending ' + currency + totalExpenses)
            dispatch({
                type:'SET_BUDGET',
                payload: totalExpenses,
            })
            return;
        }

        dispatch({
            type:'SET_BUDGET',
            payload: val,
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input 
                type='number'
                value={budget}
                step='10'
                onChange={event => setBudget(event.target.value)}
            />
        </div>
    );
};
export default Budget;