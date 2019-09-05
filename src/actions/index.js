export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const replace = () => ({
  type: 'REPLACE'
});

export const change = inputValue => {
  return ({
    type: 'CHANGE',
    payload: inputValue
  });
}

