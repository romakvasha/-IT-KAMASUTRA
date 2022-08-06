const ADD_MESSAGE = "ADD-MESSAGE";

type DialogType = {
  id: number
  name: string
  img: string
}
type MessageType = {
  id: number
  message: string
}

const initialState = {
  messages: [{ id: 1, message: "Привіт" }]as Array<MessageType>,
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
  ] as Array<DialogType>,
};

export type InitialStateType = typeof initialState

const messagesReducer = (state = initialState, action: any) => {
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

type SendMessageCreatorActionType = {
  type: typeof ADD_MESSAGE
  newMessageBody: string
}

export const addMessage = (newMessageBody: string):SendMessageCreatorActionType => ({
  type: ADD_MESSAGE,
  newMessageBody,
});

export default messagesReducer;
