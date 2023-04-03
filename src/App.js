import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './ui/screens/Home';
import Result from './ui/screens/Result';
import NotFound from './ui/screens/NotFound';
import Exercise from './ui/screens/Exercise';
import MainLayout from './ui/layouts/MainLayout';
import './styles/app.css';

export default function App() {
  const isDone = useSelector((state) => state.exercise.done);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {!isDone ? (
            <Route path="/exercise" element={<Exercise />} />
          ) : (
            <Route path="/result" element={<Result />} />
          )}          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
