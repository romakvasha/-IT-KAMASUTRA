const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
  messages: [{ id: 1, message: "Привіт" }],
  newMessageText: "Hello",
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
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    case ADD_MESSAGE:
      const body = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
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

export const addMessage = () => ({ type: ADD_MESSAGE });
export const onMessageChange = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default messagesReducer;
