<div className={styles.mainContent}>
  {loading && <p>Carregando imagens...</p>}
  {error && <p>Erro ao carregar imagens: {error}</p>}
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