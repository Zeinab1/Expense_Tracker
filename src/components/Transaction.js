import React from 'react'

export const Transaction = (props) => {
    const sign = props.transaction.amount > 0 ? '+' : '-'
    return (
        <div>
            <li className={props.transaction.amount > 0 ? 'plus' : 'minus'}>
                {props.transaction.text}
                <span className="amount">{sign}${Math.abs(props.transaction.amount)}</span>
            </li>
        </div>
    )
}
