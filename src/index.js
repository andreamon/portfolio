import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './css/app.css';
const App = lazy(() => import('./App'));

ReactDOM.render(<Suspense fallback={<div>Cargando...</div>}><App /></Suspense>,
  document.getElementById('root')
);