import './App.css';
import React from 'react';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantPage from './Pages/RestaurantPage';
import FavoritesPage from './Pages/FavoritesPage';
import LoginPage from './Pages/LoginPage';
import { FavoriteProvider } from './Contexts/FavoriteDishes';
import { AuthProvider } from './Contexts/Auth';


function App() {

  console.log(process.env.REACT_APP_FB_API);
  return (
    <Router>
      <AuthProvider>
        <FavoriteProvider>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/restaurant/:restaurantID" element={<RestaurantPage/>}/>
              <Route path="/favourites" element={<FavoritesPage/>}/>
          </Routes>
        </FavoriteProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
