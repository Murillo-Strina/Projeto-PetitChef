import React, { useState, useRef, useEffect } from "react";
import logoImage from "/PetitChefLogo.png";

function MainHeader({
  searchValue,
  onSearchChange,
  isDarkTheme,
  onToggleTheme,
  onLogout,
  onProfileClick,
  profile,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="headerInner d-flex justify-content-between align-items-center">
            <a className="navbar-brand flex-shrink-0" href="#">
              <img
                id="logo-image"
                src={logoImage}
                alt="logo-image"
                className="logoImage img-fluid"
              />
              <span className="logoText">Petit Chef</span>
            </a>
            <div className="headerContent d-flex align-items-center justify-content-end">
              <form className="d-flex justify-content-end align-items-center">
                <div className="searchIcon">
                  {searchValue === "" && (
                    <i
                      className="fa fa-search"
                      aria-hidden="true"
                      aria-label="Buscar"
                    ></i>
                  )}
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Buscar"
                    aria-label="Buscar"
                    value={searchValue}
                    onChange={onSearchChange}
                  />
                </div>
                <label className="switch flex-shrink-0 mb-0">
                  <input
                    type="checkbox"
                    checked={isDarkTheme}
                    onChange={onToggleTheme}
                  />
                  <span className="slider round"></span>
                </label>
              </form>
              <div className="profile" ref={dropdownRef}>
                <img
                  src="https://yudiz.com/codepen/nft-store/user-pic1.svg"
                  alt="user-image"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  style={{ cursor: "pointer" }}
                />
                <div className={`dropdownMenu ${isDropdownOpen ? "open" : ""}`}>
                  <a
                    href="#"
                    style={{
                      // Remove todos os estilos de hover
                      backgroundColor: "transparent",
                      color: "inherit",
                      textDecoration: "none",
                      cursor: "default", // Opcional: mantém o cursor padrão
                      outline: "none",
                      // Força os mesmos estilos para hover/foco/ativo
                      ":hover": { backgroundColor: "transparent" },
                      ":focus": { backgroundColor: "transparent" },
                      ":active": { backgroundColor: "transparent" },
                    }}
                    onClick={(e) => e.preventDefault()} // Previne comportamento padrão do link
                  >
                    <p>{(profile?.nome || "Usuário")}</p>
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Impede o comportamento padrão do link
                      onProfileClick();
                    }}
                  >
                    Perfil
                  </a>
                  <a href="#">Configurações</a>
                  <a href="#" onClick={onLogout}>
                    Sair
                  </a>
                </div>
              </div>
              <a href="#" className="notification">
                <i
                  className="fa fa-bell"
                  aria-hidden="true"
                  aria-label="Notificações"
                ></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;
