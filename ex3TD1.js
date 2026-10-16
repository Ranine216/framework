const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];

const [premierPays, deuxiemePays] = pays;
console.log(premierPays, deuxiemePays);
const [destinationPrincipale, ...autresPays] = pays;
console.log(destinationPrincipale, autresPays);

autresPays[0]= "tunisie";
console.log(autresPays);
console.log(pays)

const p2 = pays.map (p=>p);
p2[0]="tunisie"; 
console.log(p2);
console.log(pays);

const personne = [{ 
    nom : "ahmed",
    ville : "bizerte" ,
    age : 22

},{ 
    nom : "samir",
    ville : "tunis" ,
    age : 20

},{ 
    nom : "Leila",
    ville : "Sousse" ,
    age : 28

}];
const noms = personne.map(({nom})=>nom) 
console.log(noms)

const nomage = personne.map(({nom , age}) =>  ({nom , age}));
console.log(nomage);



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
 
const { prix: prixVoyage = 1000, duree: dureeVoyage = 7 } = voyage;
console.log(prixVoyage, dureeVoyage);
 
function afficherVoyage({ destination, prix, duree, transport, hotel }) {
  console.log("Voyage à " + destination);
  console.log("Prix : " + prix + " DT");
  console.log("Durée : " + duree + " jours");
  console.log("Transport : " + transport);
  console.log("Hôtel : " + hotel);
}
 
afficherVoyage(voyage);