export default (state, action) => {
	switch (action.type) {
		case 'DELETE_TRANSACTION':
			return {
				...state,
				transactions: state.transactions.filter((trans) => trans.id !== action.payload)
			};
		case 'ADD_TRANSACTION':
			const id = state.transactions.length > 1 ? state.transactions[state.transactions.length - 1].id + 1 : 1;
			action.payload.id = id;
			return {
				...state,
				transactions: [ ...state.transactions, action.payload ]
			};
		default:
			return state;
	}
};
