import React from 'react';
import { useUser } from '../../contexts/UserContext'; 
import UserErrorImage from '../../assets/UserError.jpg';
import styles from './Profile.module.css';

function Profile() {
  const { userProfile, loading } = useUser();

  if (loading) {
    return <div className={styles.ProfileLoader}></div>;
  }

  if (!userProfile || Object.keys(userProfile).length === 0) {
    return <div className={styles.ProfileLoader}>Usuário não encontrado.</div>;
  }

  return (
    <header>
      <div className={styles.ProfileContainer}>
        <div className={styles.ProfileSection}>
          <div className={styles.ProfileImage}>
            <img 
              src={userProfile.photoURL || UserErrorImage} 
              alt="Profile"
            />
          </div>

          <div className={styles.ProfileUserSettings}>
            <h1 className={styles.ProfileUserName}>
              {userProfile.nome || 'Usuário'}
            </h1>
            <button className={`${styles.ProfileButton} ${styles.ProfileEditButton}`}>
              Editar Perfil
            </button>
          </div>

          <div className={styles.ProfileStats}>
            <ul>
              <li>
                <span className={styles.ProfileStatCount}>
                  {userProfile.posts || 0}
                </span> posts
              </li>
              <li>
                <span className={styles.ProfileStatCount}>
                  {userProfile.followers || 0}
                </span> seguidores
              </li>
              <li>
                <span className={styles.ProfileStatCount}>
                  {userProfile.following || 0}
                </span> seguindo
              </li>
            </ul>
          </div>

          <div className={styles.ProfileBio}>
            <p>
              {userProfile.bio || 'Descrição do usuário...'}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Profile;
