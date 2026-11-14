const favoris = [
  { id: 1, ville: "Venise", pays: "Italie", visite: false },
  { id: 2, ville: "Marrakech", pays: "Maroc", visite: true },
  { id: 3, ville: "Maldives", pays: "Maldives", visite: false },
  { id: 4, ville: "Barcelone", pays: "Espagne", visite: true }
];
 
favoris.forEach(f => {
  console.log(f.ville + " (" + f.pays + ")");
});
 
const nonVisitees = favoris.filter(f => f.visite === false);
console.log(nonVisitees);
 
const nomsFavoris = favoris.map(f => f.ville);
console.log(nomsFavoris);
 
const favori3 = favoris.find(f => f.id === 3);
console.log(favori3);
 
const nbVisitees = favoris.reduce((compteur, f) => {
  if (f.visite) {
    return compteur + 1;
  }
  return compteur;
}, 0);
console.log(nbVisitees);
 
const favorisAvecNouvelle = [
  ...favoris,
  { id: 5, ville: "Lisbonne", pays: "Portugal", visite: false }
];
console.log(favorisAvecNouvelle);
 
const favorisModifies = favoris.map(f => {
  if (f.id === 1) {
    return { ...f, visite: true };
  }
  return f;
});
console.log(favorisModifies);
 
const favorisSansMarrakech = favoris.filter(f => f.id !== 2);
console.log(favorisSansMarrakech);