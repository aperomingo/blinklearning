import { createSlice } from '@reduxjs/toolkit';
import { removeByIndexOf } from '../../utils/array';

const initialState = {
  done: false,
  objetsDnD: [
    { id: 'dnd-element-1', text: 'Anillo', value: false },
    { id: 'dnd-element-2', text: 'Albaricoque', value: true },
    { id: 'dnd-element-3', text: 'Botella', value: false },
    { id: 'dnd-element-4', text: 'Teclado', value: false },
    { id: 'dnd-element-5', text: 'Lentejas', value: true },
    { id: 'dnd-element-6', text: 'Espaguetis', value: true },
    { id: 'dnd-element-7', text: 'Manguera', value: false },
    { id: 'dnd-element-8', text: 'Patatas', value: true },
  ],
  resultDnD: [],
};

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    setObjetsDnD: (state, action) => {
      removeByIndexOf(state.resultDnD, action.payload);
      state.objetsDnD = [...state.objetsDnD, action.payload];
      state.resultDnD = state.resultDnD;
    },
    setResultDnD: (state, action) => {
      removeByIndexOf(state.objetsDnD, action.payload);
      state.resultDnD = [...state.resultDnD, action.payload];
      state.objetsDnD = state.objetsDnD;
    },
    saveResult: (state) => {
      state.done = true;
    },
  },
});

export const { saveResult, setObjetsDnD, setResultDnD } = exerciseSlice.actions;

export default exerciseSlice.reducer;
