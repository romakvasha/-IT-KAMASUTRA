const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  postData: [{ id: 1, message: "Привіт, як справи?", likesCount: 12 }],
  newPostText: "Roman",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    case ADD_POST: {
      const body = state.newPostText;
      return {
        ...state,
        newPostText: "",
        postData: [
          ...state.postData,
          { id: Date.now(), message: body, likesCount: 0 },
        ],
      };
    }

    default:
      return state;
  }
};

export const onAddPost = () => ({ type: ADD_POST });
export const onPostChange = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
