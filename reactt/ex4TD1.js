const destinationsEurope = ["Rome", "Paris", "Madrid"];
const destinationsAsie = ["Tokyo", "Bali", "Bangkok"];
 
const copieEurope = [...destinationsEurope];
console.log(copieEurope);

const toutesDestinations = [...destinationsEurope, ...destinationsAsie];
console.log(toutesDestinations);
 
const avecLisbonne = ["Lisbonne", ...destinationsEurope];
console.log(avecLisbonne);
 
const avecLondres = [...destinationsEurope, "Londres"];
console.log(avecLondres);
 
const sansParis = [...destinationsEurope, ...destinationsAsie].filter(d => d !== "Paris");
console.log(sansParis);
 
const reservation = {
  numero: 201,
  client: "Nadia",
  destination: "Bali",
  statut: "En attente"
};
 
const copieReservation = { ...reservation };
console.log(copieReservation);
 
const reservationConfirmee = { ...reservation, statut: "Confirmée" };
console.log(reservationConfirmee);
 
const reservationAssurance = { ...reservation, assurance: true };
console.log(reservationAssurance);
 
const reservationModifiee = { ...reservation, statut: "Confirmée", destination: "Tokyo" };
console.log(reservationModifiee);