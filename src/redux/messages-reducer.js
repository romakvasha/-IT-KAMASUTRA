const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
  messages: [{ id: 1, message: "Привіт" }],
  newMessageText: "",
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

const messagesReducer = (data = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: Date.now(),
        message: data.newMessageText,
      };
      data.messages.push(newMessage);
      data.newMessageText = "";
      return data;
    case UPDATE_NEW_MESSAGE_TEXT:
      data.newMessageText = action.newText;
      return data;
    default:
      return data;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default messagesReducer;
