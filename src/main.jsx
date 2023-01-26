import React from 'react'
import ReactDOM from 'react-dom/client'
import Game from './Game';
import flags from './flags';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Game flags={flags} attempts={3} />
  </React.StrictMode>,
)
