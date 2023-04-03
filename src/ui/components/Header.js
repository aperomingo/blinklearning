import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/header.css';

const initialNavElements = [
  { key: 'key-nav-1', to: '/', text: 'Inicio' },
  { key: 'key-nav-2', to: '/exercise', text: 'Ejercicio' },
];

export default function Header() {
  const [navElements, setNavElements] = useState(initialNavElements);
  const isDone = useSelector((state) => state.exercise.done);

  useEffect(() => {
    if (isDone) {
      setNavElements([
        { key: 'key-nav-1', to: '/', text: 'Inicio' },
        { key: 'key-nav-3', to: '/result', text: 'Resultado' },
      ]);
    }
  }, [isDone]);

  return (
    <nav>
      <ul className="flex-row nav-list">
        {navElements.map((item) => (
          <li key={item.key}>
            <Link to={item.to} className="nav-list-link">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
