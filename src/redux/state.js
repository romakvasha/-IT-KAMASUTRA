let renderEntireTree = () => {};
export const data = {
  profilePage: {
    postData: [
      { id: 1, message: "Привіт, як справи?", likesCount: 12 },
      { id: 2, message: "Це мій перший пост", likesCount: 20 },
      { id: 3, message: "Це мій другий пост", likesCount: 30 },
    ],
    newPostText: "",
  },
  messagesPage: {
    messages: [
      { id: 1, message: "Привіт" },
      { id: 2, message: "Пока" },
      { id: 3, message: "Привіт" },
      { id: 4, message: "Привіт" },
      { id: 5, message: "Привіт" },
    ],
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
};

export const addPost = () => {
  const newPost = {
    id: 5,
    message: data.profilePage.newPostText,
    likesCount: 0,
  };
  data.profilePage.postData.push(newPost);
  data.profilePage.newPostText = "";
  renderEntireTree(data);
};

export const updateNewPostText = (newTex) => {
  data.profilePage.newPostText = newTex;
  renderEntireTree(data);
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
};
