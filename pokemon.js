//make a GET request to fetch data about a specific Pokemon
fetch("https://pokeapi.co/api/v2/pokemon/squirtle/")

    //parse the response as JSON
    .then((res) => res.json())

    //once JSON data is obtained, access and display information about the pokemon
    .then(result => {
        
        //log the name of the pokemon
        console.log("Name:\n", result.name);

        //log the weight of the pokemon
        console.log("\nWeight:\n", result.weight);

        //log the abilities of the pokemon
        console.log("\nAbilities: ");
        result.abilities.forEach(ability => {
            console.log("-", ability);
        })
    })
    //catch any errors that occur during the fetch request
    .catch(error => {
        console.log(error);
    });