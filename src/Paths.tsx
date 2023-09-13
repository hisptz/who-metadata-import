import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyApp from './App';
import DetailsPage from './DetailsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<MyApp/>} />
        <Route path="/details/:title"  element={<DetailsPage/>} />
      </Routes>
    </Router>
  );
}
export default App;
