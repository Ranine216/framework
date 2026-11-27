import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.css";
function Header() {
  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <span className={styles.logoIcon}>✈️</span>
        <span>Travel <strong>Agency</strong></span>
      </div>

      <nav className={styles.nav}>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/destinations"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          Destinations
        </NavLink>

        <NavLink
          to="/apropos"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          À propos
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          Contact
        </NavLink>

      </nav>

      <Link to="/reservation" className={styles.reserve}>
        ✈️ Réserver maintenant
      </Link>

    </header>
  );
}

export default Header;