import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.content}>

        <div className={styles.brand}>
          <h2>✈ Travel <span>Agency</span></h2>
          <p>
            Découvrez le monde et créez
            des souvenirs inoubliables.
          </p>
        </div>

        <div className={styles.links}>
          <h3>Navigation</h3>
          <a href="/">Accueil</a>
          <a href="#destinations">Destinations</a>
          <a href="#apropos">À propos</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.contact}>
          <h3>Contactez-nous</h3>
          <p>📧 contact@travelagency.com</p>
          <p>📞 +216 12 345 678</p>
          <p>📍 Tunisie</p>
        </div>

      </div>

      <div className={styles.slogan}>
        Voyagez. Explorez. Rêvez... ✈
      </div>

      <div className={styles.copyright}>
        © 2026 Travel Agency - Tous droits réservés.
      </div>

    </footer>
  );
}

export default Footer;