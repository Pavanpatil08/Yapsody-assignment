import { ADD_TODO, DONE_TODO,EDIT_TODO,CLEAR_ALL_DONE_TASKS } from "../actionTypes";

const initialState = {
  tasks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const data = action.payload;
      return {
        ...state,
        tasks: [...state.tasks, data]
      };
    }
    case DONE_TODO: {
      let tasks = state.tasks;
      const { id } = action.payload;
      tasks[id].status = "done";
      
      return {
        ...state,
        tasks: tasks
      };
    }
    case EDIT_TODO: {
      console.log(action.payload)
      let tasks=state.tasks;
      let data=action.payload
      tasks[data.id]=data.editedData
      return {
        ...state,
        tasks:tasks
      }
    }
    case CLEAR_ALL_DONE_TASKS: {
      let tasks=state.tasks.filter(item => {
        return item.status !== "done"
      });
      return {
        ...state,
        tasks:tasks
      }
    }
    default:
      return state;
  }
}
