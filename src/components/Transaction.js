import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

const Transaction = ({ name, amount, id }) => {
	const { deleteTransaction } = useContext(GlobalContext);
	const sign = amount > 0 ? '+' : '-';
	return (
		<li className={amount < 0 ? 'minus' : 'plus'}>
			{name}{' '}
			<span>
				{sign}${Math.abs(amount)}
			</span>
			<button onClick={() => deleteTransaction(id)} className="delete-btn">
				X
			</button>
		</li>
	);
};
export default Transaction;
