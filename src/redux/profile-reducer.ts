import { profileAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import {PhotosType, PostType, ProfileType} from '../types/types';

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

const initialState = {
  postData: [{ id: 1, message: "Привіт, як справи?", likesCount: 12 }] as Array<PostType>,
  newPostText: "Roman",
  profile: null as ProfileType | null,
  status: "",
  newPostBody:"Roman",
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action:any): InitialStateType => {
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

    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos }as ProfileType };

    default:
      return state;
  }
};


type AddPostActionCreatorActionType = {
  type: typeof ADD_POST
  newPostBody: string
}

export const onAddPost = (newPostBody: string): AddPostActionCreatorActionType => ({ type: ADD_POST, newPostBody });
type SetUserProfileActionType = {
  type: typeof SET_USERS_PROFILE
  profile: ProfileType
}
const setUsersProfile = (profile: ProfileType):SetUserProfileActionType => ({
  type: SET_USERS_PROFILE,
  profile,
});

type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status,
});

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType):SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getUsersProfile = (userId: number) => async (dispatch: any) => {
  const response = await usersAPI.getProfile(userId);
  dispatch(setUsersProfile(response.data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile: string) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUsersProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
