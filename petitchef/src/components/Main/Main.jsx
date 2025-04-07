import React, { useState, useEffect } from 'react';
import { useUser } from '../../contexts/UserContext'; // Usa o contexto para obter os dados do usuário
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Main.css';

import MainHeader from './MainHeader';
import MainSidebar from './MainSidebar';
import MainContent from './MainContent';

function Main() {
  // Obtemos os dados do usuário e o estado de carregamento do contexto
  const { userProfile, loading } = useUser();
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle('darkTheme', isDarkTheme);
    document.body.classList.toggle('lightTheme', !isDarkTheme);
  }, [isDarkTheme]);

  const handleThemeChange = () => {
    setIsDarkTheme(prev => !prev);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const handleProfile = () => {
    navigate('/profile'); // Não precisamos passar userProfile, pois ele estará disponível via contexto na rota
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner">
          <svg
            width="65px"
            height="65px"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="path"
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              cx="33"
              cy="33"
              r="30"
            ></circle>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div>
      <MainHeader
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        isDarkTheme={isDarkTheme}
        onToggleTheme={handleThemeChange}
        onLogout={handleLogout}
        onProfileClick={handleProfile}
        profile={userProfile}  
      />
      
      <div className="contentWrapper">
        <div className="container-fluid">
          <div className="contentInner d-flex">
            <MainSidebar />
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
