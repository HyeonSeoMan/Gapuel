const initialState = {
  SendDebt: [
    {
      phone: '010-0000-0000',
      title: '박상선',
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
      phone: '010-4431-5598',
      title: '현승환',
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
      phone: '010-1234-5736',
      title: '박상선',
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
      phone: '010-4431-5598',
      title: '현승환',
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
            phone: action.payload.phone,
            title: action.payload.title,
            total: Number(action.payload.amount),
            history: [
              {
                date: action.payload.date,
                amount: Number(action.payload.amount),
              },
            ],
          },
        ],
      };
    case 'SendRemove':
      return {
        ...state,
        SendDebt: SendDebt.filter((Debt) => Debt.phone !== action.phone),
      };
    case 'SendAddHistory':
      return {
        ...state,
        SendDebt: SendDebt.map((item) => {
          if (item.phone === action.payload.phone) {
            return {
              ...item,
              total: item.total + action.payload.amount,
              history: [
                ...item.history,
                {
                  date: action.payload.date,
                  amount: Number(action.payload.amount),
                },
              ],
            };
          } else {
            return item;
          }
        }),
      };
    case 'ReceiveAdd':
      return {
        ...state,
        ReceiveDebt: [
          ...ReceiveDebt,
          {
            phone: action.payload.phone,
            title: action.payload.title,
            total: Number(action.payload.amount),
            history: [
              {
                date: action.payload.date,
                amount: Number(action.payload.amount),
              },
            ],
          },
        ],
      };
    case 'ReceiveRemove':
      return {
        ...state,
        ReceiveDebt: ReceiveDebt.filter((Debt) => Debt.phone !== action.phone),
      };
    case 'ReceiveAddHistory':
      return {
        ...state,
        ReceiveDebt: ReceiveDebt.map((item) => {
          if (item.phone === action.payload.phone) {
            return {
              ...item,
              total: item.total + action.payload.amount,
              history: [
                ...item.history,
                {
                  date: action.payload.date,
                  amount: Number(action.payload.amount),
                },
              ],
            };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};

export default debt;
