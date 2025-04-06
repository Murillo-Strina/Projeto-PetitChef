import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import InputField from "./InputFieldLogin"; 
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

function Login() {
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginSenha, setLoginSenha] = useState("");

  const [signupNome, setSignupNome] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupSenha, setSignupSenha] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleKeyPress = (event, action) => {
    if (event.key === "Enter") action();
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signupEmail, signupSenha);
      setIsSubmitted(true);
      
      // Salvar dados no Firestore com UID como ID do documento
      await setDoc(doc(db, "Usuarios", userCredential.user.uid), {
        nome: signupNome,
        email: signupEmail
      });
  
      setTimeout(() => navigate("/"), 2500);
    } catch (error) {
      setErrorMessage("Erro ao cadastrar. Verifique os dados e tente novamente.");
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginSenha);
      setIsSubmitted(true);
      console.log("Usuário logado:", userCredential.user);
      setTimeout(() => navigate("/"), 2500);
    } catch (error) {
      setErrorMessage("E-mail ou senha incorretos. Tente novamente.");
    }
  };

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, loginEmail);
      alert("E-mail de redefinição de senha enviado com sucesso!");
    } catch (error) {
      alert("Erro ao enviar e-mail de redefinição. Verifique o e-mail informado.");
    }
  };

  useEffect(() => {
    const button = document.querySelector(`.${styles.img__btn}`);
    const container = document.querySelector(`.${styles.cont}`);

    if (!button || !container) return;

    const toggleSignup = () => container.classList.toggle(styles.sSignup);
    button.addEventListener("click", toggleSignup);

    return () => {
      button.removeEventListener("click", toggleSignup);
    };
  }, []);

  return (
    <div className={styles.loginBody}>
      <div className={styles.cont}>
        <div className={`${styles.form} ${styles.signIn}`}>
          <h2 className={styles.textDarker}>Bem-vindo de volta!</h2>
          <InputField
            label="Email"
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e, handleSignIn)}
          />
          <InputField
            label="Senha"
            type="password"
            value={loginSenha}
            onChange={(e) => setLoginSenha(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e, handleSignIn)}
          />
          <p className={`${styles.forgotPass} ${styles.textDarker}`} onClick={handleResetPassword}>
            Esqueceu a senha?
          </p>
          
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

          {!isSubmitted ? (
            <button type="button" className={styles.submit} onClick={handleSignIn}>
              Entrar
            </button>
          ) : (
            <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className={styles.checkmark__circle} cx="26" cy="26" r="25" fill="none" />
              <path className={styles.checkmark__check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          )}
        </div>
        <div className={styles.subCont}>
          <div className={styles.img}>
            <div className={`${styles.imgText} ${styles.mUp}`}>
              <h2 className={styles.textDarker}>Novo por aqui?</h2>
              <p className={styles.textDarker}>Cadastre-se e descubra um mundo de novas receitas!</p>
            </div>
            <div className={`${styles.imgText} ${styles.mIn}`}>
              <h2 className={styles.textDarker}>Já é um de nós?</h2>
              <p className={styles.textDarker}>Se você já tem uma conta, é só fazer login!</p>
            </div>
            <div className={styles.img__btn}>
              <span className={styles.mUp}>Cadastrar</span>
              <span className={styles.mIn}>Entrar</span>
            </div>
          </div>

          {/* Formulário de Cadastro */}
          <div className={`${styles.form} ${styles.signUp}`}>
            <h2 className={styles.textDarker}>Prepare-se para saborear o melhor!</h2>
            <InputField
              label="Nome"
              type="text"
              value={signupNome}
              onChange={(e) => setSignupNome(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, handleSignUp)}
            />
            <InputField
              label="Email"
              type="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, handleSignUp)}
            />
            <InputField
              label="Senha"
              type="password"
              value={signupSenha}
              onChange={(e) => setSignupSenha(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, handleSignUp)}
            />
            
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}

            {!isSubmitted ? (
              <button type="button" className={styles.submit} onClick={handleSignUp}>
                Cadastrar
              </button>
            ) : (
              <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className={styles.checkmark__circle} cx="26" cy="26" r="25" fill="none" />
                <path className={styles.checkmark__check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
