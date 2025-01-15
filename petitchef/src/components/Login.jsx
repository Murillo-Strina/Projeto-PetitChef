import React, { useEffect } from 'react';
import styles from './Login.module.css';

function Login() {
  useEffect(() => {
    const button = document.querySelector(`.${styles.img__btn}`);
    const container = document.querySelector(`.${styles.cont}`);
    
    if (button && container) {
      const toggleSignup = () => container.classList.toggle(styles.sSignup);
      button.addEventListener('click', toggleSignup);

      return () => button.removeEventListener('click', toggleSignup);
    }
  }, []);

  return (
    <>
      <div className={styles.loginBody}>
        <div className={styles.cont}>
          <div className={`${styles.form} ${styles.signIn}`}>
            <h2>Welcome back,</h2>
            <label>
              <span>Email</span>
              <input type="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
            <p className={styles.forgotPass}>Forgot password?</p>
            <button type="button" className={styles.submit}>Sign In</button>
          </div>
          <div className={styles.subCont}>
            <div className={styles.img}>
              <div className={`${styles.imgText} ${styles.mUp}`}>
                <h2>New here?</h2>
                <p>Sign up and discover great amount of new opportunities!</p>
              </div>
              <div className={`${styles.imgText} ${styles.mIn}`}>
                <h2>One of us?</h2>
                <p>If you already have an account, just sign in. We've missed you!</p>
              </div>
              <div className={styles.img__btn}>
                <span className={styles.mUp}>Sign Up</span>
                <span className={styles.mIn}>Sign In</span>
              </div>
            </div>
            <div className={`${styles.form} ${styles.signUp}`}>
              <h2>Time to feel like home,</h2>
              <label>
                <span>Name</span>
                <input type="text" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" />
              </label>
              <label>
                <span>Password</span>
                <input type="password" />
              </label>
              <button type="button" className={styles.submit}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
