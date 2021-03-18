const initialState = {
  SendDebt: [
    {
      id: 0,
      phone: '010-0000-0000',
      from: 'me',
      to: 'b',
      total: 15000,
      history: [
        {
          date: '2021-03-14, 18:32',
          amount: 20000,
        },
        {
          date: '2021-03-15, 20:50',
          amount: -5000,
        },
      ],
    },
    {
      id: 1,
      phone: '010-4431-5598',
      from: 'me',
      to: '승환',
      total: 8000,
      history: [
        {
          date: '2021-02-26, 11:17',
          amount: 8000,
        },
      ],
    },
  ],
  ReceiveDebt: [
    {
      id: 0,
      phone: '010-1234-5736',
      from: 'a',
      to: 'me',
      total: 1000,
      history: [
        {
          date: '2021-03-14, 18:32',
          amount: 20000,
        },
        {
          date: '2021-03-15, 20:50',
          amount: -10000,
        },
      ],
    },
    {
      id: 1,
      phone: '010-4431-5598',
      from: '승환',
      to: 'me',
      total: 8000,
      history: [
        {
          date: '2021-02-26, 11:17',
          amount: 8000,
        },
      ],
    },
  ],
};

const debt = (state = initialState, action) => {
  const SendDebt = state.SendDebt;
  const ReceiveDebt = state.ReceiveDebt;
  switch (action.type) {
    case 'SendAdd':
      return {
        ...state,
        SendDebt: [
          ...SendDebt,
          {
            id: action.payload.id,
            title: action.payload.from + ' To ' + action.payload.to,
            from: action.payload.from,
            to: action.payload.to,
            total: action.payload.amount,
            history: [
              {
                date: action.payload.date,
                amount: action.payload.amount,
              },
            ],
          },
        ],
      };
    case 'SendRemove':
      return {
        ...state,
        SendDebt: SendDebt.slice(0, SendDebt.length - 1),
      };
    case 'ReceiveAdd':
      return {
        ...state,
        ReceiveDebt: [
          ...ReceiveDebt,
          {
            id: action.payload.id,
            title: action.payload.from + ' To ' + action.payload.to,
            from: action.payload.from,
            to: action.payload.to,
            total: action.payload.amount,
            history: [
              {
                date: action.payload.date,
                amount: action.payload.amount,
              },
            ],
          },
        ],
      };
    case 'ReceiveRemove':
      return {
        ...state,
        ReceiveDebt: ReceiveDebt.slice(0, ReceiveDebt.length - 1),
      };
    default:
      return state;
  }
};

export default debt;
