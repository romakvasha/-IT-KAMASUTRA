import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
  postData: [{ id: 1, message: "Привіт, як справи?", likesCount: 12 }],
  newPostText: "Roman",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return { ...state, status: action.status };
    case ADD_POST: {
      const body = action.newPostBody;
      return {
        ...state,
        postData: [
          ...state.postData,
          { id: Date.now(), message: body, likesCount: Date.now() },
        ],
      };
    }
    case SET_USERS_PROFILE:
      return { ...state, profile: action.profile };

    default:
      return state;
  }
};

export const onAddPost = (newPostBody) => ({ type: ADD_POST, newPostBody });
const setUsersProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const getUsersProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUsersProfile(response.data));
  });
};
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
