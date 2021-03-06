const initialState = {
  SendDebt: [
    {
      phone: '01027481495',
      title: '박 상선',
      total: 15000,
      history: [
        {
          createAt: '2021-03-14T18:32',
          title: 'test1 - 1',
          date: '2021-03-14T18:32',
          amount: 20000,
        },
        {
          createAt: '2021-03-15T20:50',
          title: 'test1 - 2',
          date: '2021-03-15T20:50',
          amount: -5000,
        },
      ],
    },
    {
      phone: '01044315598',
      title: '현 승환',
      total: 8000,
      history: [
        {
          createAt: '2021-02-26T11:17',
          title: 'test2 - 1',
          date: '2021-02-26T11:17',
          amount: 8000,
        },
      ],
    },
  ],
  ReceiveDebt: [
    {
      phone: '01027481495',
      title: '박 상선',
      total: 10000,
      history: [
        {
          createAt: '2021-03-14T18:32',
          title: 'test3 - 1',
          date: '2021-03-14T18:32',
          amount: 20000,
        },
        {
          createAt: '2021-03-15T20:50',
          title: 'test3 - 2',
          date: '2021-03-15T20:50',
          amount: -10000,
        },
      ],
    },
    {
      phone: '01044315598',
      title: '현 승환',
      total: 8000,
      history: [
        {
          createAt: '2021-02-26T11:17',
          title: 'test4 - 1',
          date: '2021-02-26T11:17',
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
          {
            phone: action.payload.phone,
            title: action.payload.title,
            total: Number(action.payload.amount),
            history: [
              {
                createAt: new Date(),
                title: action.payload.hisTitle,
                date: action.payload.date,
                amount: Number(action.payload.amount),
              },
            ],
          },
          ...SendDebt,
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
                {
                  createAt: new Date(),
                  title: action.payload.title,
                  date: action.payload.date,
                  amount: Number(action.payload.amount),
                },
                ...item.history,
              ],
            };
          } else {
            return item;
          }
        }),
      };
    case 'SendRemoveHistory':
      return {
        ...state,
        SendDebt: SendDebt.map((item) => {
          if (item.phone === action.payload.phone) {
            const ordered = item.history.reduce((accum, curr) => {
              if (curr.createAt !== action.payload.createAt) accum.push(curr);
              return accum;
            }, []);
            const target = {
              ...item,
              total: item.total - action.payload.amount,
              history: ordered,
            };
            return target;
          } else {
            return item;
          }
        }),
      };
    case 'ReceiveAdd':
      return {
        ...state,
        ReceiveDebt: [
          {
            phone: action.payload.phone,
            title: action.payload.title,
            total: Number(action.payload.amount),
            history: [
              {
                createAt: new Date(),
                title: action.payload.hisTitle,
                date: action.payload.date,
                amount: Number(action.payload.amount),
              },
            ],
          },
          ...ReceiveDebt,
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
                {
                  createAt: new Date(),
                  title: action.payload.title,
                  date: action.payload.date,
                  amount: Number(action.payload.amount),
                },
                ...item.history,
              ],
            };
          } else {
            return item;
          }
        }),
      };
    case 'ReceiveRemoveHistory':
      return {
        ...state,
        ReceiveDebt: ReceiveDebt.map((item) => {
          if (item.phone === action.payload.phone) {
            const ordered = item.history.reduce((accum, curr) => {
              if (curr.createAt !== action.payload.createAt) accum.push(curr);
              return accum;
            }, []);
            const target = {
              ...item,
              total: item.total - action.payload.amount,
              history: ordered,
            };
            return target;
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
