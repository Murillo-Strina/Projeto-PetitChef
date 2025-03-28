import React, { useEffect, useState, useRef } from 'react';
import './Main.css';
import './Main.css';

function UnsplashGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasFetched = useRef(false);
  const CACHE_DURATION = 30 * 60 * 1000;

  const fetchImages = async () => {
    const clientId = import.meta.env.VITE_UNSPLASH_CLIENT_ID;
    if (!clientId) {
      setError('Erro: VITE_UNSPLASH_CLIENT_ID não foi encontrado. Verifique o arquivo .env.');
      setLoading(false);
      return;
    }
    const url = `https://api.unsplash.com/photos/random?query=food+dish&count=10&client_id=${clientId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Limite de requisições atingido ou erro na API.');
      }
      const data = await response.json();
      setImages(data);
      localStorage.setItem('unsplashImages', JSON.stringify(data));
      localStorage.setItem('unsplashImagesTimestamp', Date.now());
    } catch (err) {
      console.error('Erro ao buscar imagens do Unsplash:', err);
      setError('Erro ao buscar imagens do Unsplash');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasFetched.current) return;
    const cachedImages = localStorage.getItem('unsplashImages');
    const cachedTimestamp = localStorage.getItem('unsplashImagesTimestamp');
    if (cachedImages && cachedTimestamp) {
      const now = Date.now();
      const diff = now - parseInt(cachedTimestamp, 10);
      if (diff < CACHE_DURATION) {
        setImages(JSON.parse(cachedImages));
        setLoading(false);
        hasFetched.current = true;
        return;
      }
    }
    fetchImages();
    hasFetched.current = true;
  }, []);

  const promotionalMessages = [
    "Experimente Agora",
    "Aproveite o Sabor",
    "Desfrute o Momento",
    "Novidade no Cardápio",
    "Sabor Inigualável",
    "Feito com Amor",
    "Delícia para o Paladar",
    "Prato Exclusivo",
    "Sabores que Encantam",
    "Uma Explosão de Sabor",
    "Harmonia de Ingredientes",
    "Culinária de Primeira",
    "Surpreenda-se",
    "Para os Amantes da Boa Mesa",
    "Uma Experiência Única",
    "Tradição e Qualidade",
    "Feito para Você",
    "Sabor que Conquista",
    "Descubra o Segredo",
    "Um Toque Especial",
  ];

  if (loading) {
    return <p>Carregando imagens...</p>;
  }

  if (error) {
    return <p>Erro ao carregar imagens: {error}</p>;
  }

  if (images.length === 0) {
    return <p>Nenhuma imagem encontrada.</p>;
  }

  return (
    <div className="mainContent">
      <div className="heroContainer d-flex">
        <div className="heroLeft">
          <img
            src={images[0].urls.regular}
            alt="Prato"
            className="heroImage"
            loading="lazy"
          />
          <p className="heroCredit">
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
        <div className="heroRight">
          <h2 className="heroTitle">Venha conhecer nosso novo prato!</h2>
          <p className="heroSubtitle">Experimente um sabor como nunca antes.</p>
        </div>
      </div>

      <div className="dishesContainer">
        {images.slice(1, 9).map((img, index) => (
          <div key={img.id} className="dishCard dishTheme">
            <img
              src={img.urls.small}
              alt="Prato"
              className="dishImage"
              loading="lazy"
            />
            <h3 className="dishTitle">
              {promotionalMessages[index % promotionalMessages.length]}
            </h3>
            <p className="dishCredit">
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
    </div>
  );
}

export default UnsplashGallery;
