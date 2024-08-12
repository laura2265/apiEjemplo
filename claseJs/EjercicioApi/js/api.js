let contenedorPersonajes = document.querySelector('#personajes');

fetch('https://rickandmortyapi.com/api/character')
  .then((response) => response.json())
  .then((datos) => {
    console.log(datos);
    datos.results.forEach(Elementos => {
      const contenedorCreado = document.createElement('div');
      contenedorCreado.classList.add('col-md-6', 'mb-4'); // 2 columnas en pantallas medianas
      contenedorCreado.innerHTML = `
        <div class="card">
            <img src="${Elementos.image}" class="card-img-top" alt="${Elementos.name}">
            <div class="card-body">
                <h5 class="card-title">${Elementos.name}</h5>
                <p class="card-text">ID: ${Elementos.id}</p>
                <p class="card-text">Species: ${Elementos.species}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      `;
      contenedorPersonajes.appendChild(contenedorCreado);
    });
  });
