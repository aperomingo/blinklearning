import { configureStore } from '@reduxjs/toolkit';
import exerciseReducer from './slices/exerciseSlice';

export default configureStore({
  reducer: {
    exercise: exerciseReducer,
  },
});
