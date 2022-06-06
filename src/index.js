import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const pool = [
  {
    question: "Welcher SQL-Befehl fragt Daten ab?",
    answers: [
      { id: 1, answer: "SHOW", },
      { id: 2, answer: "QUERY",},
      { id: 3, answer: "SELECT", correct: true },
    ],
  },
  {
    question: "Welcher SQL-Befehl erstellt einen neuen Datensatz?",
    answers: [
      { id: 1, answer: "CREATE", },
      { id: 2, answer: "ADD",},
      { id: 3, answer: "INSERT", correct: true },
    ],
  },{
    question: "Welcher SQL-Befehl erstellt einen neuen Benutzer?",
    answers: [
      { id: 1, answer: "CREATE USER", correct: true },
      { id: 2, answer: "ADD USER",},
      { id: 3, answer: "USERADD" },
    ],
  },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App pool={pool}/>
  </React.StrictMode>
);
