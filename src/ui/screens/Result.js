import React from 'react';
import { useSelector } from 'react-redux';
import Exercise from './Exercise';
import CheckoutBtn from '../components/CheckoutBtn';

export default function Result() {
  const isDone = useSelector((state) => state.exercise.done);

  return isDone ? (
    <>
      <Exercise />
      <CheckoutBtn />
    </>
  ) : (
    <div>Tienes que hacer el ejercicio antes de ver el resultado.</div>
  );
}
