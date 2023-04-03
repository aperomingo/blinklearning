import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
  const isDone = useSelector((state) => state.exercise.done);

  const intro = isDone
    ? 'Prueba finalizada. '
    : 'Bienvenido a mi prueba técnica. Por mi parte, sería un placer poder comentarla e intercambiar ideas y decisiones. ';
  const linkText = isDone ? 'Ir al Resultado' : 'Ir al Ejercicio';
  const linkRedirection = isDone ? '/result' : 'exercise';

  return (
    <div>
      {intro}
      <div>
        <Link to={linkRedirection}>{linkText}</Link>
      </div>
    </div>
  );
}
