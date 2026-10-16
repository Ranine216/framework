const destinations = [
{ id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7,
disponible: true },
{ id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10,
disponible: true },
{ id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5,
disponible: false },
{ id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4,
disponible: true },
{ id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12,
disponible: true },
{ id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6,
disponible: false } ];

destinations.forEach(d => console.log(d.ville));

const ville = destinations.map(d => d.ville);
console.log(ville);

const prix = destinations.filter(d => d.prix < 1500);
console.log( "Destinations < 1500 DT :", prix);

const destination3 = destinations.find(d => d.id === 3);
console.log("Destination de l'id 3 :", destination3);

const indexTokyo = destinations.findIndex(d => d.ville === "Tokyo");
console.log( "Position de Tokyo :", indexTokyo);

const auMoinsUneDispo = destinations.some(d => d.disponible === true);
console.log(" Au moins une destination disponible ?", auMoinsUneDispo);


const tousPrixPositifs = destinations.every(d => d.prix > 0);
console.log(" Tous les prix > 0 ?", tousPrixPositifs);

const budgetTotal = destinations.reduce((total, d) => total + d.prix, 0);
console.log(" Budget total :", budgetTotal, "DT");