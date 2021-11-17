const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";

const initialState = {
  postData: [{ id: 1, message: "Привіт, як справи?", likesCount: 12 }],
  newPostText: "Roman",
  profile: null,
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
    case SET_USERS_PROFILE:
      return { ...state, profile: action.profile };

    default:
      return state;
  }
};

export const onAddPost = () => ({ type: ADD_POST });
export const onPostChange = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUsersProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});

export default profileReducer;
