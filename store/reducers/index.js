const initialState = {
  debt: [
    {
      id: 0,
      title: 'a To b',
      from: 'a',
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
      title: '현서 To 승환',
      from: '현서',
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
};

const counter = (state = initialState, action) => {
  const {debt} = state;
  switch (action.type) {
    // case 'INCREMENT':
    //   return {
    //     counter: [
    //       ...counter.slice(0, action.index),
    //       {
    //         counterNum: counter[action.index].counterNum + 1,
    //       },
    //       ...counter.slice(action.index + 1, counter.length),
    //     ],
    //   };
    // case 'DECREMENT':
    //   return {
    //     counter: [
    //       ...counter.slice(0, action.index),
    //       {
    //         counterNum: counter[action.index].counterNum - 1,
    //       },
    //       ...counter.slice(action.index + 1, counter.length),
    //     ],
    //   };
    case 'ADD':
      return {
        debt: [
          ...debt,
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
    case 'REMOVE':
      return {
        debt: debt.slice(0, debt.length - 1),
      };
    default:
      return state;
  }
};

export default counter;
