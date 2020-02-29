import React, { Fragment, useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/globalState';

const TransactionList = () => {
	// pullint out from the global state
	const { transactions } = useContext(GlobalContext);
	return (
		<Fragment>
			<h3>History</h3>
			<ul className="list">
				{transactions.map(({ name, amount, id }) => {
					return <Transaction key={id} id={id} name={name} amount={amount} />;
				})}
			</ul>
		</Fragment>
	);
};

export default TransactionList;
