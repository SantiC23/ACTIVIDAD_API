const URL = 'https://rickandmortyapi.com/api/character' // Asigno mi API a una constante
const container = document.getElementById('personaje') // Tomo el contenedor(div) de mi HTML

//Realizo mi funciòn fetch
fetch(URL)
.then(response => {return response.json()})                    
.then( (data) => {
console.log(data.results);

//Creo una funcion para mostrar los personajes
function RickFunction(data){
    container.innerHTML = "";

    data.results.forEach(item => {
        container.innerHTML += `<div>
        <h1>${item.name}</h1> 
        <img src="${item.image}" alt="Rickmiss"> 
        <p>ID:${item.id}</p> 
        <p>Estado:${item.status}</p> 
        <p>Especie:${item.species}</p> 
        <p>Tipo:${item.type}</p>
    </div> `
        
        
    });

    
}


RickFunction(data) //Invoco la función para que me los muestre

});

