import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';
import logoImage from '/PetitChefLogo.png';

function Main() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.classList.toggle('darkTheme', isDarkTheme);
    document.body.classList.toggle('lightTheme', !isDarkTheme);
  }, [isDarkTheme]);

  const handleThemeChange = () => {
    setIsDarkTheme(prev => !prev);
  };

  const fetchImages = () => {
    const clientId = import.meta.env.VITE_UNSPLASH_CLIENT_ID;

    if (!clientId) {
      setError("Erro: VITE_UNSPLASH_CLIENT_ID não foi encontrado. Verifique o arquivo .env.");
      return;
    }

    const url = `https://api.unsplash.com/photos/random?query=food plate&count=4&client_id=${clientId}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Limite de requisições atingido ou erro na API.');
        }
        return response.json();
      })
      .then(data => {
        if (data) {
          setImages(data);
          localStorage.setItem('unsplashImages', JSON.stringify(data));
        }
      })
      .catch(err => {
        console.error('Erro ao buscar imagens do Unsplash:', err);
        const savedImages = JSON.parse(localStorage.getItem('unsplashImages'));
        if (savedImages && savedImages.length > 0) {
          setImages(savedImages);
        } else {
          const emergencyImages = [
            {
              urls: { regular: 'https://via.placeholder.com/800x600', small: 'https://via.placeholder.com/400x300' },
              user: { name: 'Autor Desconhecido', links: { html: '#' } },
              id: 'emergency1'
            },
            {
              urls: { regular: 'https://via.placeholder.com/800x600', small: 'https://via.placeholder.com/400x300' },
              user: { name: 'Autor Desconhecido', links: { html: '#' } },
              id: 'emergency2'
            },
            {
              urls: { regular: 'https://via.placeholder.com/800x600', small: 'https://via.placeholder.com/400x300' },
              user: { name: 'Autor Desconhecido', links: { html: '#' } },
              id: 'emergency3'
            },
            {
              urls: { regular: 'https://via.placeholder.com/800x600', small: 'https://via.placeholder.com/400x300' },
              user: { name: 'Autor Desconhecido', links: { html: '#' } },
              id: 'emergency4'
            }
          ];
          setImages(emergencyImages);
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchImages();
  }, []);

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

            <div className={styles.mainContent}>
              {loading && <p>Carregando imagens...</p>}
              {error && <p>{error}</p>}
              {!loading && !error && images.length > 0 && (
                <>
                  <div className={`${styles.heroContainer} d-flex`}>
                    <div className={styles.heroLeft}>
                      <img
                        src={images[0].urls.regular}
                        alt="Prato"
                        className={styles.heroImage}
                        loading="lazy"
                      />
                      <p className={styles.heroCredit}>
                        Foto por{' '}
                        <a
                          href={`${images[0].user.links.html}?utm_source=PetitChef&utm_medium=referral`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {images[0].user.name}
                        </a>{' '}
                        no{' '}
                        <a
                          href="https://unsplash.com/?utm_source=PetitChef&utm_medium=referral"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Unsplash
                        </a>
                      </p>
                    </div>
                    <div className={styles.heroRight}>
                      <h2 className={styles.heroTitle}>Venha conhecer nosso novo prato!</h2>
                      <p className={styles.heroSubtitle}>Experimente um sabor como nunca antes.</p>
                    </div>
                  </div>

                  <div className={styles.dishesContainer}>
                    {images.slice(1, 4).map((img, index) => (
                      <div key={img.id} className={`${styles.dishCard} ${styles.dishTheme}`}>
                        <img
                          src={img.urls.small}
                          alt="Prato"
                          className={styles.dishImage}
                          loading="lazy"
                        />
                        <h3 className={styles.dishTitle}>
                          {index === 0
                            ? "Experimente Agora"
                            : index === 1
                            ? "Aproveite o Sabor"
                            : "Desfrute o Momento"}
                        </h3>
                        <p className={styles.dishCredit}>
                          Foto por{' '}
                          <a
                            href={`${img.user.links.html}?utm_source=PetitChef&utm_medium=referral`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {img.user.name}
                          </a>{' '}
                          no{' '}
                          <a
                            href="https://unsplash.com/?utm_source=PetitChef&utm_medium=referral"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Unsplash
                          </a>
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;