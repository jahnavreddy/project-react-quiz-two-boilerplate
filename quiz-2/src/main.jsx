import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx';
import Quiz from './components/Quiz.jsx';
import Result from './components/Result.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    {/* <Home /> */}
    <Quiz />
    {/* <Result/> */}


  </>,
)
