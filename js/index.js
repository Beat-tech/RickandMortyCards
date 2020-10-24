// Vista maestro obtenida a partir de el resultado obtenido de una API (se debe mostrar una imágen, un nombre y otro(s) dato(s))
// ¿Qué es una vista maestro?
// Una vista maestro es un conjunto de tarjetitas (HTML) mostradas con flex (Una cuadrícula con los elementos del fetch)
// APIS RECOMENDADAS
// https://pokeapi.co/
// https://swapi.dev/
// https://rickandmortyapi.com
// https://www.football-data.org/
// https://docs.openaq.org/
// https://www.septastats.com/api
// https://sunrise-sunset.org/api
// https://anapioficeandfire.com/
// https://source.unsplash.com/
// https://randomuser.me/api

//template string el código de Html entre comillas

// let rick = document.getElementById ("rick"); 
// fetch( "https://rickandmortyapi.com/api/character")
// .then( response => response.json())
// .then (rmData=>rick.src=rmData.results[0].image);
// let box = document.getElementsByClassName ("characterBox");
// console.log (box[1]);


let container = document.getElementById ("containerCharacter")
// for (let i=0;i < 5; i++)
    fetch(`https://rickandmortyapi.com/api/character?page=${Math.round(Math.random()*29+1)}`)
    .then( response => response.json())
    .then (rmData=>{
        console.log (rmData);
        rmData.results.length = 20
        rmData.results.map((character)=>{
            console.log (character)
            let card = `
            <div class="characterBox">
                <img src=${character.image} alt="">
                <p>Name: ${character.name}</p>
                <p>Status: ${character.status}</p>
                <p>Species: ${character.species}</p>
            </div>
            `;
            container.innerHTML += card

        });
    })








