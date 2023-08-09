import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/Header';
import { Provider } from 'react-redux';
import store from './redux/store';
import { routes, IRoutes } from './services/routes';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Training from './pages/Training';
import Grammar from './pages/Grammar';
import Dicrionary from './pages/Dictionary';
import UserDicrionary from './pages/UserDictionary';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Provider store={store}>  
   <BrowserRouter>
   <Header/>
   <main>
   <Routes>
    <Route path='/' element={<Dicrionary/>} />
    <Route path='/training' element={<Training/>} />
    <Route path='/grammar' element={<Grammar/>} />
    <Route path='/user-dictionary' element={<UserDicrionary/>} />
    </Routes>
   </main>
    </BrowserRouter> 
    </Provider> 
  </React.StrictMode>
);

