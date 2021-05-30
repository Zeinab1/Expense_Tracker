import React ,{useContext} from 'react';
import {GlobalContext} from '../context/State'

export const Transaction = (props) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = props.transaction.amount > 0 ? '+' : '-'
    return (
        <div>
            <li className={props.transaction.amount > 0 ? 'plus' : 'minus'}>
                {props.transaction.text}
                <span className="amount">{sign}${Math.abs(props.transaction.amount)}</span>
                <button className='delete-btn'onClick={()=> deleteTransaction(props.transaction.id)}>x</button>
            </li>
        </div>
    )
}
