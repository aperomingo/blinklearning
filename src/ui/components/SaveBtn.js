import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveResult } from '../../store/slices/exerciseSlice';

export default function SaveBtn() {
  const isDone = useSelector((state) => state.exercise.done);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    !isDone && (
      <button
        className="save-btn"
        onClick={() => {
          dispatch(saveResult());
          navigate('/');
        }}
      >
        Guardar
      </button>
    )
  );
}
