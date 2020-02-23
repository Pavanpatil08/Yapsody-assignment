import { ADD_TODO,DONE_TODO,CLEAR_ALL_DONE_TASKS,EDIT_TODO } from "./actionTypes";

export const addTodo = data => ({
  type: ADD_TODO,
  payload: data
});

export const doneTask = data => ({
  type: DONE_TODO,
  payload: data
});
export const editTodo = data => ({
  type: EDIT_TODO,
  payload: data
});

export const clearAllDoneTasks = data => ({
  type: CLEAR_ALL_DONE_TASKS,
  payload: data
});