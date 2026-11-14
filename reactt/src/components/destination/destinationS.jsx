
import styles from "./destination.module.css";
import { useState } from "react";

function Destination(props) {
    const [afficher, setAfficher] = useState(false);

    function generateDetail() {
        setAfficher(!afficher);
    }

    return (
        <div className={styles.destination}>
            <img
                className={styles.image}
                src={props.image}
                alt={props.nom}
            />

            <div className={styles.content}>
                <h2 className={styles.titre}>
                    {props.nom}
                </h2>

                <p className={styles.pays}>
                    {props.pays}
                </p>

                {afficher && (
                    <p className={styles.description}>
                        {props.description}
                    </p>
                )}

                <h3 className={styles.prix}>
                    {props.prix} DT
                </h3>

                <button onClick={generateDetail}>
                    {afficher
                        ? "Masquer les détails"
                        : "Afficher les détails"}
                </button>
            </div>
        </div>
    );
}

export default Destination;






















/*import Destination from "../destination/destination";

import santorin from "../../assets/santorini.jpg";
import bali from "../../assets/bali.jpg";
import rome from "../../assets/rome.jpg";

import styles from "./destination.module.css";

function Destinations() {

  const destinationlist = [
    {
      id: 1,
      image: santorin,
      nom: "Santorin",
      pays: "Grèce",
      description: "Découvrez les magnifiques paysages des îles grecques.",
      prix: 1200
    },
    {
      id: 2,
      image: bali,
      nom: "Bali",
      pays: "Indonésie",
      description: "Profitez des plages paradisiaques de Bali.",
      prix: 1800
    },
    {
      id: 3,
      image: rome,
      nom: "Rome",
      pays: "Italie",
      description: "Découvrez les monuments historiques de Rome.",
      prix: 950
    }
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Nos destinations
      </h1>

      <div className={styles.destinations}>
        {destinationlist.map((d) => (
          <Destination
            key={d.id}
            image={d.image}
            nom={d.nom}
            pays={d.pays}
            description={d.description}
            prix={d.prix}
          />
        ))}
      </div>
    </section>
  );
}

export default Destinations;







/*function Destinations() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Nos destinations
      </h1>

      <div className={styles.destinations}>
        <Destination
          image={santorin}
          nom="Santorini"
          pays="Grèce"
          description="Découvrez les magnifiques paysages des îles grecques."
          prix="1200"
        />

        <Destination
          image={bali}
          nom="Bali"
          pays="Indonésie"
          description="Profitez des plages paradisiaques de Bali."
          prix="1800"
        />

        <Destination
          image={rome}
          nom="Rome"
          pays="Italie"
          description="Découvrez les monuments historiques de Rome."
          prix="950"
        />
      </div>
    </section>
  );
}

export default Destinations;


*/