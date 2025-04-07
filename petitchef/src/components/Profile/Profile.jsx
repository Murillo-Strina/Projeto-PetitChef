import React from 'react';
import styles from './Profile.module.css';

function Profile() {
  return (
    <>
      <header>
        <div className={styles.ProfileContainer}>
          <div className={styles.ProfileSection}>
            <div className={styles.ProfileImage}>
              <img 
                src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" 
                alt="Profile"
              />
            </div>

            <div className={styles.ProfileUserSettings}>
              <h1 className={styles.ProfileUserName}>janedoe_</h1>
              <button className={`${styles.ProfileButton} ${styles.ProfileEditButton}`}>
                Edit Profile
              </button>
              <button 
                className={`${styles.ProfileButton} ${styles.ProfileSettingsButton}`} 
                aria-label="profile settings"
              >
                <i className="fas fa-cog" aria-hidden="true"></i>
              </button>
            </div>

            <div className={styles.ProfileStats}>
              <ul>
                <li><span className={styles.ProfileStatCount}>164</span> posts</li>
                <li><span className={styles.ProfileStatCount}>188</span> followers</li>
                <li><span className={styles.ProfileStatCount}>206</span> following</li>
              </ul>
            </div>

            <div className={styles.ProfileBio}>
              <p>
                <span className={styles.ProfileRealName}>Jane Doe</span> Lorem ipsum dolor sit, 
                amet consectetur adipisicing elit 📷✈️🏕️
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.ProfileBody}>
        <div className={styles.ProfileContainer}>
          <div className={styles.ProfileGallery}>
            {[...Array(12)].map((_, index) => (
              <div key={index} className={styles.ProfileGalleryItem} tabIndex="0">
                <img
                  src={`https://example.com/photo${index + 1}.jpg`}
                  className={styles.ProfileGalleryImage}
                  alt=""
                />
                
                {(index === 2 || index === 3 || index === 4 || index === 6 || index === 8) && (
                  <div className={styles.ProfileGalleryItemType}>
                    <span className={styles.ProfileVisuallyHidden}>
                      {index === 3 || index === 11 ? 'Video' : 'Gallery'}
                    </span>
                    <i 
                      className={`fas ${
                        index === 3 || index === 11 ? 'fa-video' : 'fa-clone'
                      }`} 
                      aria-hidden="true"
                    ></i>
                  </div>
                )}

                <div className={styles.ProfileGalleryItemInfo}>
                  <ul>
                    <li className={styles.ProfileGalleryItemLikes}>
                      <span className={styles.ProfileVisuallyHidden}>Likes:</span>
                      <i className="fas fa-heart" aria-hidden="true"></i> {56 + index * 10}
                    </li>
                    <li className={styles.ProfileGalleryItemComments}>
                      <span className={styles.ProfileVisuallyHidden}>Comments:</span>
                      <i className="fas fa-comment" aria-hidden="true"></i> {index % 3}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.ProfileLoader}></div>
        </div>
      </main>
    </>
  );
}

export default Profile;