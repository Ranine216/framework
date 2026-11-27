const fruitsRouges = ["fraise", "framboise", "cerise"];

for (let fruit of fruitsRouges) {
    console.log(`la ${fruit} c'est bon!`);
}

fruitsRouges.forEach(fruit => {
    console.log(`la ${fruit} c'est bon!`)
});

const nombre = [12, 3, 4, 10];
let doubles = nombre.map(n => n*2);
console.log(doubles);
   

