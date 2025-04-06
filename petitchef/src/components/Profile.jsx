import React, { useEffect, useState, useRef } from 'react';
import { auth, db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate('/login');
      } else {
        try {
          // Buscar dados do Firestore usando UID do usuário logado
          const userDoc = await getDoc(doc(db, "usuarios", user.uid));
          
          if (userDoc.exists()) {
            setUserProfile(userDoc.data());
          }
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <p>{userProfile.nome}</p> 

    </div>
    
  )
}

export default Profile