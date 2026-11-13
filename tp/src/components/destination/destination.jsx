
import styles from "./destination.module.css";

function Destination(props) {
  return (
    <div className={styles.destination}>
      <img
        src={props.image}
        alt={props.nom}
        className={styles.image}
      />

      <h2>{props.nom}</h2>
      <h3>{props.pays}</h3>

      <p>{props.description}</p>

      <p className={styles.prix}>
        Prix : {props.prix} €
      </p>
    </div>
  );
}

export default Destination;
