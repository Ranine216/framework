const reservations = [
  { numero: 101, client: "Nadia", destination: "Bali", montant: 1800, statut: "Confirmée" },
  { numero: 102, client: "Karim", destination: "Rome", montant: 950, statut: "En attente" },
  { numero: 103, client: "Leila", destination: "Tokyo", montant: 2500, statut: "Confirmée" },
  { numero: 104, client: "Sami", destination: "Santorin", montant: 1200, statut: "Annulée" },
  { numero: 105, client: "Amira", destination: "Djerba", montant: 500, statut: "Confirmée" }
];
 
const reservationsConfirmees = reservations.filter(r => r.statut === "Confirmée");
console.log(reservationsConfirmees);
 
const nomsClients = reservations.map(r => r.client);
console.log(nomsClients);
 
const reservation103 = reservations.find(r => r.numero === 103);
console.log(reservation103);
 
const montantConfirmees = reservations
  .filter(r => r.statut === "Confirmée")
  .reduce((total, r) => total + r.montant, 0);
console.log(montantConfirmees);
 
const toutesConfirmees = reservations.every(r => r.statut === "Confirmée");
console.log(toutesConfirmees);
 
const clientsVoyages = reservations.map(r => ({ client: r.client, voyage: r.destination }));
console.log(clientsVoyages);
 
 
const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];
 
const [premierPays, deuxiemePays] = pays;
console.log(premierPays, deuxiemePays);
 
const [, , troisiemePays] = pays;
console.log(troisiemePays);
 
const [destinationPrincipale, ...autresPays] = pays;
console.log(destinationPrincipale, autresPays);
 
const voyage = {
  destination: "Bali",
  prix: 1800,
  duree: 10,
  transport: "Avion",
  hotel: "5 étoiles"
};
 
const { destination, prix } = voyage;
console.log(destination, prix);
 
const { destination: ville } = voyage;
console.log(ville);
 