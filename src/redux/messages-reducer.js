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
    case ADD_MESSAGE: {
      const newMessage = {
        id: Date.now(),
        message: state.newMessageText,
      };
      const stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      const stateCopy = { ...state };
      stateCopy.newMessageText = action.newText;

      return stateCopy;
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default messagesReducer;
