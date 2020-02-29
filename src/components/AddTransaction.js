import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/globalState';
const AddTransaction = () => {
	const { addTransaction } = useContext(GlobalContext);

	const [ name, setName ] = useState('');
	const [ amount, setAmount ] = useState('');
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!name && !amount) return;
		addTransaction({ name, amount: +amount });
		setAmount('');
		setName('');
	};
	return (
		<Fragment>
			<h3>Add New Transaction</h3>
			<form onSubmit={handleFormSubmit}>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type="text"
						placeholder="Enter text..."
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder="Enter amount,,"
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</Fragment>
	);
};

export default AddTransaction;
