import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/globalState';

const Balance = () => {
	const { transactions } = useContext(GlobalContext);
	// create an array of only amounts
	const amounts = transactions.map((trans) => trans.amount);
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
	return (
		<Fragment>
			<h4>Your Balance</h4>
			<h1>${total}</h1>
		</Fragment>
	);
};

export default Balance;
