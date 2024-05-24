

export const addItem = text => {
  return {
    type: "items/addItem",
    payload: {
      text
    },
  };
};

export const deleteItem = text => {
  return {
    type: "items/deleteItem",
    payload: {
      text
    },
  };
};

export const filterItem = text => {
  return {
    type: "items/filterItem",
    payload: {
      text
    },
  };
};
