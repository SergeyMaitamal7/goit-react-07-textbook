import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const taskInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const TasksSlice = createSlice({
  name: 'tasks',
  initialState: taskInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = TasksSlice.actions;
export const tasksReducer = TasksSlice.reducer;
