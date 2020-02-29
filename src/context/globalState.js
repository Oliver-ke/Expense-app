import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// Initial state
const initialState = {
	transactions: [
		{ id: 1, name: 'Flower', amount: -20 },
		{ id: 2, name: 'Salary', amount: 300 },
		{ id: 3, name: 'Tomatoes', amount: -10 },
		{ id: 4, name: 'Rice', amount: 120 }
	]
};

// Create a global context
export const GlobalContext = createContext(initialState);

// in order for our component to make use of this context,
// we need to have a provider
// this provider is like a HOC that wraps around the children
// and provides this context to them
export const GlobalProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(AppReducer, initialState);

	// actions
	const deleteTransaction = (id) => {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		});
	};

	const addTransaction = ({ name, amount }) => {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: { name, amount }
		});
	};

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
