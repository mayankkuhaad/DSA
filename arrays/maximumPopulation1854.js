var maximumPopulation = function(logs) {
    let population = new Array(101).fill(0);
    for(let [birth,death] of logs){
        population[birth-1950]++;
        population[death-1950]--;
        console.log(birth,death)
    }
    console.log(population)

    let maximumPopulation = 0;
    let currentPopulation = 0;
    let maxYear = 1950;
    for(let i=0; i<101; i++){
        currentPopulation = currentPopulation + population[i];
        if(currentPopulation > maximumPopulation){
            maximumPopulation = currentPopulation;
            maxYear = 1950 + i;
        }
    }
    return maxYear
};
console.log(maximumPopulation([[1993,1999],[2000,2010]]));