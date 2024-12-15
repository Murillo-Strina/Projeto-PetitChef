import './global.css'; // Estilos globais
import React, { useEffect } from 'react';
import styles from './Main.module.css';
import logoImage from "/PetitChefLogo.png";

function Main() {
  useEffect(() => {
    const themeSwitch = document.querySelector('#checkbox');
  
    if (themeSwitch) {
      if (!document.body.classList.contains('darkTheme')) {
        document.body.classList.add('darkTheme');
      }
  
      const handleThemeChange = () => {
        if (document.body.classList.contains('lightTheme')) {
          document.body.classList.remove('lightTheme');
          document.body.classList.add('darkTheme');
        } else {
          document.body.classList.remove('darkTheme');
          document.body.classList.add('lightTheme');
        }
      };
  
      themeSwitch.addEventListener('change', handleThemeChange);
  
      return () => {
        themeSwitch.removeEventListener('change', handleThemeChange);
      };
    }
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
                Petit Chef
              </a>
              <div className={`${styles.headerContent} d-flex align-items-center justify-content-end`}>
                <form className="d-flex justify-content-end align-items-center">
                  <div className={styles.searchIcon}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                  <label className={`${styles.switch} flex-shrink-0 mb-0`}>
                    <input id="checkbox" type="checkbox" />
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
                  <i className="fa fa-bell" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className={styles.nftStore}>
        <div className="container-fluid">
          <div className={`${styles.nftStoreInner} d-flex`}>
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
                    <span>Favourite</span>
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#" className="d-flex align-items-center nav-link">
                    <i className="fa fa-square-o" aria-hidden="true"></i>
                    <span>Collections</span>
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#" className="d-flex align-items-center nav-link">
                    <i className="fa fa-fire" aria-hidden="true"></i>
                    <span>Trending</span>
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#" className="d-flex align-items-center nav-link">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <span>Featured</span>
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#" className="d-flex align-items-center nav-link">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span>Purchased</span>
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#" className="d-flex align-items-center nav-link">
                    <i className="fa fa-cog" aria-hidden="true"></i>
                    <span>Settings</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.nftStoreContent}>
              <div className={styles.nftUpContent}>
                <div className="row">
                  <div className="col-md-8">
                    <div className={`${styles.fireBubbleArt} d-flex justify-content-between align-items-center`}>
                      <img
                        src="https://yudiz.com/codepen/nft-store/image-1.svg"
                        alt="fire-bubble-image"
                        className={`${styles.fireImage} ${styles.fireWidth}`}
                      />
                      <div className={`${styles.fireContent} ${styles.fireWidth}`}>
                        <h3 className="mb-0">Fire'o Bubble Art</h3>
                        <div className={`${styles.fireTime} d-flex justify-content-between`}>
                          <div className={styles.currentBid}>
                            <h4>Current Bid</h4>
                            <span>0.70 ETH</span>
                          </div>
                          <div className={styles.auction}>
                            <h4>Auction Ending in</h4>
                            <span>07h:25m:46s</span>
                          </div>
                          <span className={styles.middleLine}></span>
                        </div>
                        <span className={styles.fireUser}>
                          <img
                            src="https://yudiz.com/codepen/nft-store/user-pic1.svg"
                            alt="user-image"
                          />
                          Rose Ortega
                        </span>
                        <div className={`d-flex ${styles.fireLinks}`}>
                          <a href="#" className={`${styles.heart} flex-shrink-0`}>
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                          </a>
                          <a href="#" className={styles.themeBtn}>
                            Place a bid
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <figure
                      className={styles.paintImage}
                      style={{
                        background:
                          "url('https://yudiz.com/codepen/nft-store/image-2.svg') no-repeat center center / cover",
                      }}
                    >
                      <h1>Paint Art</h1>
                    </figure>
                  </div>
                </div>
              </div>

              <div className={styles.trending}>
                <div className={styles.trendingTitle}>
                  <div className="row justify-content-between align-items-center">
                    <div className="col-6">
                      <h2>Trending Auctions</h2>
                    </div>
                    <div className="col-6 text-right">
                      <a href="#" className={styles.themeBtn}>
                        View More
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.trendingGrid}>
                  <div className="row">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="col-md-4">
                        <div className={styles.trendingContent}>
                          <img
                            src={`https://yudiz.com/codepen/nft-store/card-${item}.svg`}
                            alt={`card-image-${item}`}
                            className="img-fluid"
                          />
                          <div className={styles.trendingDesc}>
                            <h4 className={styles.userTitle}>User {item}</h4>
                            <h3 className={styles.userPosition}>Artwork {item}</h3>
                            <div className={`${styles.bid} d-flex justify-content-between align-items-center`}>
                              <div>
                                <h5>Current Bid</h5>
                                <span>0.70 ETH</span>
                              </div>
                              <div>
                                <h5>Auction Ending in</h5>
                                <span>07h:25m:46s</span>
                              </div>
                            </div>
                            <img
                              src={`https://yudiz.com/codepen/nft-store/user-pic${item + 2}.svg`}
                              alt={`user-pic-${item}`}
                              className={styles.userImage}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
