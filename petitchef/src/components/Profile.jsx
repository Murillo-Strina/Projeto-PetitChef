import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';

function Profile() {
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const Dados = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate('/login');
      } else {
        try {
          // Buscar dados do Firestore usando UID do usuário logado
          const userDoc = await getDoc(doc(db, "Usuarios", user.uid));
          if (userDoc.exists()) {
            setUserProfile(userDoc.data());
          }
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
        setLoading(false);
      }
    });
    return () => Dados();
  }, [navigate]);

  return (
    <div>
      <p>{userProfile.nome}</p> 
      <p>{userProfile.email}</p>
    </div>
    
  )
}

export default Profile