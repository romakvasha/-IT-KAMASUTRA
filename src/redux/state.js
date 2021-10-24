const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const store = {
  _data: {
    profilePage: {
      postData: [
        { id: 1, message: "Привіт, як справи?", likesCount: 12 },
        { id: 2, message: "Це мій перший пост", likesCount: 20 },
        { id: 3, message: "Це мій другий пост", likesCount: 30 },
      ],
      newPostText: "",
    },
    messagesPage: {
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
    },
    navPage: {
      navFriends: [
        {
          name: "Ruslana",
          img: "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          alt: "Аватар",
        },
        {
          name: "Roma",
          img: "https://crosti.ru/patterns/00/09/59/dc0d3fd8fa/picture.jpg",
          alt: "Аватар",
        },
        {
          name: "Taras",
          img: "https://crosti.ru/patterns/00/09/59/dc0d3fd8fa/picture.jpg",
          alt: "Аватар",
        },
      ],
    },
  },
  _callSubscruber() {},
  getData() {
    return this._data;
  },
  subscribe(observer) {
    this._callSubscruber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: Date.now(),
        message: this._data.profilePage.newPostText,
        likesCount: 0,
      };
      this._data.profilePage.postData.push(newPost);
      this._data.profilePage.newPostText = "";
      this._callSubscruber(this._data);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._data.profilePage.newPostText = action.newText;
      this._callSubscruber(this._data);
    } else if (action.type === ADD_MESSAGE) {
      const newMessage = {
        id: Date.now(),
        message: this._data.messagesPage.newMessageText,
      };
      this._data.messagesPage.messages.push(newMessage);
      this._data.messagesPage.newMessageText = "";
      this._callSubscruber(this._data);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._data.messagesPage.newMessageText = action.newText;
      this._callSubscruber(this._data);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default store;
window.store = store;
