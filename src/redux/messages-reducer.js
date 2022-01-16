const ADD_MESSAGE = "ADD-MESSAGE";

const initialState = {
  messages: [{ id: 1, message: "Привіт" }],
  dialogs: [
    {
      id: 1,
      name: "Ruslana",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg",
    },
    {
      id: 2,
      name: "Roma",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg",
    },
    {
      id: 3,
      name: "Taras",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg",
    },
    {
      id: 4,
      name: "Sergey",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg",
    },
    {
      id: 5,
      name: "Andry",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg",
    },
  ],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const body = action.newMessageBody;
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: Date.now(),
            message: body,
          },
        ],
      };

    default:
      return state;
  }
};

export const addMessage = (newMessageBody) => ({
  type: ADD_MESSAGE,
  newMessageBody,
});

export default messagesReducer;
