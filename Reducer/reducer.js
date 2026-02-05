const actions = [
  { type: 'DEPOSIT', amount: 100 },
  { type: 'WITHDRAW', amount: 50 },
  { type: 'DEPOSIT', amount: 20 }
];

const initialState = { balance: 0 };

const accountReducer = (state, action) => {
  if (action.type === 'DEPOSIT') return { balance: state.balance + action.amount };
  if (action.type === 'WITHDRAW') return { balance: state.balance - action.amount };
  return state;
};

// The reducer processes the actions one by one
const finalBalance = actions.reduce(accountReducer, initialState);
console.log(finalBalance); // { balance: 70 }