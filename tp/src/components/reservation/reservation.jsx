import { useState } from "react";
import styles from "./reservation.module.css";

const initial = {
  nom: "", email: "", telephone: "", destination: "",
  dateDepart: "", nbVoyageurs: "1", typeVoyage: "", demandes: "",
};

function Reservation() {
  const [form, setForm] = useState(initial);
  const [erreurs, setErreurs] = useState({});
  const [reservation, setReservation] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErreurs((prev) => {
      const copie = { ...prev };
      delete copie[name];
      return copie;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const err = {};

    if (!form.nom.trim()) err.nom = "Le nom est obligatoire";

    if (!form.email.trim()) err.email = "L'email est obligatoire";
    else if (!/\S+@\S+\.\S+/.test(form.email)) err.email = "Adresse email invalide";

    if (form.telephone && !/^[0-9+\s]{8,15}$/.test(form.telephone))
      err.telephone = "Numéro de téléphone invalide";

    if (!form.destination) err.destination = "Choisissez une destination";

    if (!form.dateDepart) err.dateDepart = "La date de départ est obligatoire";
    else if (new Date(form.dateDepart) < new Date().setHours(0, 0, 0, 0))
      err.dateDepart = "La date ne peut pas être dans le passé";

    if (!form.nbVoyageurs || Number(form.nbVoyageurs) < 1)
      err.nbVoyageurs = "Au moins 1 voyageur";

    if (!form.typeVoyage) err.typeVoyage = "Choisissez un type de voyage";

    setErreurs(err);

    if (Object.keys(err).length === 0) {
      setReservation(form);
      setShowPopup(true);
    }
  }

  function handleReset() {
    setForm(initial);
    setErreurs({});
    setReservation(null);
  }

  const cls = (champ) => (erreurs[champ] ? styles.inputError : "");
  const msg = (champ) =>
    erreurs[champ] && <span className={styles.errorMessage}>{erreurs[champ]}</span>;

  return (
    <section className={styles.container}>
      <h2>Réservez votre voyage</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGroup}>
          <label htmlFor="nom">Nom et prénom :</label>
          <input id="nom" name="nom" type="text" className={cls("nom")}
            value={form.nom} onChange={handleChange} placeholder="Votre nom et prénom" />
          {msg("nom")}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email :</label>
          <input id="email" name="email" type="email" className={cls("email")}
            value={form.email} onChange={handleChange} placeholder="Votre email" />
          {msg("email")}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="telephone">Téléphone :</label>
          <input id="telephone" name="telephone" type="tel" className={cls("telephone")}
            value={form.telephone} onChange={handleChange} placeholder="+216 ..." />
          {msg("telephone")}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="destination">Destination :</label>
          <select id="destination" name="destination" className={cls("destination")}
            value={form.destination} onChange={handleChange}>
            <option value="">-- Choisir --</option>
            <option value="Santorin">Santorin (Grèce)</option>
            <option value="Bali">Bali (Indonésie)</option>
            <option value="Rome">Rome (Italie)</option>
          </select>
          {msg("destination")}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="dateDepart">Date de départ :</label>
          <input id="dateDepart" name="dateDepart" type="date" className={cls("dateDepart")}
            value={form.dateDepart} onChange={handleChange} />
          {msg("dateDepart")}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="nbVoyageurs">Nombre de voyageurs :</label>
          <input id="nbVoyageurs" name="nbVoyageurs" type="number" min="1"
            className={cls("nbVoyageurs")}
            value={form.nbVoyageurs} onChange={handleChange} />
          {msg("nbVoyageurs")}
        </div>

        <div className={styles.formGroup}>
          <label>Type de voyage :</label>
          <div className={styles.radioGroup}>
            {["Famille", "Couple", "Amis", "Affaires"].map((t) => (
              <label key={t}>
                <input type="radio" name="typeVoyage" value={t}
                  checked={form.typeVoyage === t} onChange={handleChange} />
                {t}
              </label>
            ))}
          </div>
          {msg("typeVoyage")}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="demandes">Demandes spéciales :</label>
          <textarea id="demandes" name="demandes" value={form.demandes}
            onChange={handleChange} placeholder="Allergies, accessibilité, etc." />
        </div>

        <div className={styles.buttons}>
          <button type="submit" className={styles.submitButton}>Réserver</button>
          <button type="button" className={styles.resetButton} onClick={handleReset}>
            Réinitialiser
          </button>
        </div>
      </form>

      {reservation && (
        <div className={styles.recap}>
          <h3>Récapitulatif de votre réservation</h3>
          <p><strong>Nom :</strong> {reservation.nom}</p>
          <p><strong>Email :</strong> {reservation.email}</p>
          {reservation.telephone && <p><strong>Téléphone :</strong> {reservation.telephone}</p>}
          <p><strong>Destination :</strong> {reservation.destination}</p>
          <p><strong>Date de départ :</strong> {reservation.dateDepart}</p>
          <p><strong>Voyageurs :</strong> {reservation.nbVoyageurs}</p>
          <p><strong>Type :</strong> {reservation.typeVoyage}</p>
          {reservation.demandes && <p><strong>Demandes :</strong> {reservation.demandes}</p>}
        </div>
      )}

      {showPopup && (
        <div className={styles.overlay} onClick={() => setShowPopup(false)}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <h3>Réservation confirmée ✈️</h3>
            <p>Merci {reservation?.nom}, votre demande a bien été enregistrée.</p>
            <button onClick={() => setShowPopup(false)}>Fermer</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Reservation;