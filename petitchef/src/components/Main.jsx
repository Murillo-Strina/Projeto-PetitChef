import React, { useEffect, useState } from 'react'
import styles from './Main.module.css'
import logoImage from '/PetitChefLogo.png'
import UnsplashGallery from './UnsplashGallery' 
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

function Main() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('darkTheme', isDarkTheme)
    document.body.classList.toggle('lightTheme', !isDarkTheme)
  }, [isDarkTheme])

  const handleThemeChange = () => {
    setIsDarkTheme(prev => !prev)
  }
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log("Usuário Logado " +uid)
      // ...
    } else {
      // User is signed out
      // ...
      console.log("O usuário não está logado")
    }
  });

  return (
    <div>
      <header>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className={`${styles.headerInner} d-flex justify-content-between align-items-center`}>
              <a className="navbar-brand flex-shrink-0" href="#">
                <img
                  id="logo-image"
                  src={logoImage}
                  alt="logo-image"
                  className={`${styles.logoImage} img-fluid`}
                />
                <span className={styles.logoText}>Petit Chef</span>
              </a>
              <div className={`${styles.headerContent} d-flex align-items-center justify-content-end`}>
                <form className="d-flex justify-content-end align-items-center">
                  <div className={styles.searchIcon}>
                    <i className="fa fa-search" aria-hidden="true" aria-label="Buscar"></i>
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Buscar"
                      aria-label="Buscar"
                    />
                  </div>
                  <label className={`${styles.switch} flex-shrink-0 mb-0`}>
                    <input
                      id="checkbox"
                      type="checkbox"
                      checked={isDarkTheme}
                      onChange={handleThemeChange}
                    />
                    <span className={`${styles.slider} ${styles.round}`}></span>
                  </label>
                </form>
                <a href="#" className={styles.profile}>
                  <img
                    src="https://yudiz.com/codepen/nft-store/user-pic1.svg"
                    alt="user-image"
                  />
                </a>
                <a href="#" className={styles.notification}>
                  <i className="fa fa-bell" aria-hidden="true" aria-label="Notificações"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className={styles.contentWrapper}>
        <div className="container-fluid">
          <div className={`${styles.contentInner} d-flex`}>
            <div className={styles.menuLinks}>
              {/* Menu lateral */}
              <ul>
                <li className={`${styles.navItem} ${styles.active}`}>
                  <a href="#" className="d-flex align-items-center nav-link">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <span>Home</span>
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#" className="d-flex align-items-center nav-link">
                    <i className="fa fa-briefcase" aria-hidden="true"></i>
                    <span>Market</span>
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#" className="d-flex align-items-center nav-link">
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                    <span>Favoritos</span>
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#" className="d-flex align-items-center nav-link">
                    <i className="fa fa-square-o" aria-hidden="true"></i>
                    <span>Coleções</span>
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#" className="d-flex align-items-center nav-link">
                    <i className="fa fa-fire" aria-hidden="true"></i>
                    <span>Em Alta</span>
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#" className="d-flex align-items-center nav-link">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <span>Destaques</span>
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#" className="d-flex align-items-center nav-link">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span>Comprados</span>
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#" className="d-flex align-items-center nav-link">
                    <i className="fa fa-cog" aria-hidden="true"></i>
                    <span>Configurações</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Conteúdo principal */}
            <div className={styles.mainContent}>
              {/* Aqui chamamos o componente que lida com a API e exibe as imagens */}
              <UnsplashGallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
