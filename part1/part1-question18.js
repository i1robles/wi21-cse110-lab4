let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    raceCars: 2
};

console.log("--Printing properties that start with the letter r or have an odd value--");
for (const prop in statistics) {
    if ((prop.slice(0,1) == "r") || (statistics[prop]%2 == 1)) {
        console.log(`${prop}: ${statistics[prop]}`);
    }  
}