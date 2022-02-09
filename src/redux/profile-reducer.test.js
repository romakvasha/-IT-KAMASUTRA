import profileReducer, { onAddPost } from "./profile-reducer";

it("добавився пост", () => {
  // 1. тестові дані
  let action = onAddPost("Новий пост");
  const state = {
    postData: [
      { id: 1, message: "Привіт, як справи?", likesCount: 12 },
      { id: 1, message: "Привіт, як справи?", likesCount: 12 },
      { id: 1, message: "Привіт, як справи?", likesCount: 12 },
      { id: 1, message: "Привіт, як справи?", likesCount: 12 },
      { id: 1, message: "Привіт, як справи?", likesCount: 12 },
    ],
  };
  // 2. екшен
  let newState = profileReducer(state, action);
  // 3. очікующі дані
  expect(newState.postData.length).toBe(state.postData.length + 1);
});
