import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleSenhaChange = (event) => setSenha(event.target.value);


  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        setIsSubmitted(true);
        console.log("Usuário cadastrado:", userCredential.user);
      })
      .catch((error) => {
        console.error("Erro ao cadastrar:", error.code, error.message);
      });
  };

  useEffect(() => {
    const button = document.querySelector(`.${styles.img__btn}`);
    const container = document.querySelector(`.${styles.cont}`);

    if (button && container) {
      const toggleSignup = () => container.classList.toggle(styles.sSignup);
      button.addEventListener("click", toggleSignup);

      return () => button.removeEventListener("click", toggleSignup);
    }
  }, []);

  return (
    <>
      <div className={styles.loginBody}>
        <div className={styles.cont}>
          <div className={`${styles.form} ${styles.signIn}`}>
            <h2>Bem-vindo de volta!</h2>
            <label>
              <span>Email</span>
              <input type="email" onChange={handleEmailChange} />
            </label>
            <label>
              <span>Senha</span>
              <input type="password" onChange={handleSenhaChange} />
            </label>
            <p className={styles.forgotPass}>Esqueceu a senha?</p>
            <button type="button" className={styles.submit}>
              Entrar
            </button>
          </div>

          <div className={styles.subCont}>
            <div className={styles.img}>
              <div className={`${styles.imgText} ${styles.mUp}`}>
                <h2>Novo por aqui?</h2>
                <p>Cadastre-se e descubra um mundo de novas receitas!</p>
              </div>
              <div className={`${styles.imgText} ${styles.mIn}`}>
                <h2>Já é um de nós?</h2>
                <p>Se você já tem uma conta, é só fazer login!</p>
              </div>
              <div className={styles.img__btn}>
                <span className={styles.mUp}>Cadastrar</span>
                <span className={styles.mIn}>Entrar</span>
              </div>
            </div>
            <div className={`${styles.form} ${styles.signUp}`}>
              <h2>Prepare-se para saborear o melhor!</h2>
              <label>
                <span>Nome</span>
                <input type="text" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" onChange={handleEmailChange} />
              </label>
              <label>
                <span>Senha</span>
                <input type="password" onChange={handleSenhaChange} />
              </label>
              {!isSubmitted ? (
                <button
                  type="button"
                  className={styles.submit}
                  onClick={handleSignUp}
                >
                  Cadastrar
                </button>
              ) : (
                <svg
                  className={styles.checkmark}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    className={styles.checkmark__circle}
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    className={styles.checkmark__check}
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
