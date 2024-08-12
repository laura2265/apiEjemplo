//plantear 5 peliculas y si escoge una mostrar la infode cada una.

let generoPelicula={
    accion:{
        peliculaAccion1:"Avengers",
        peliculaAccion2:"Spiderman",
        peliculaAccion3:"Venum",
        peliculaAccion4:"Wason",
        peliculaAccion5:"john Wike"
    },

    terror:{
        peliculaTerror1:"La monja",
        peliculaTerror2:"El exorcismo de emily roce",
        peliculaTerror3:"Saw x",
        peliculaTerror4:"talk to me ",
        peliculaTerror5:"Maleficio"
    },
    romance:{
        peliculaRomance1: "Yo Antres de ti",
        peliculaRomance2: "A dos metros de ti ",
        peliculaRomance3: "una vida en un año",
    }
}
let genero=prompt('que geero depeliculas buscas, escribe si quieres accion, terror o romance')

switch (genero) {
    case "accion":
        let peliculas=parseInt(prompt('1. Avengers, 2. spiderman, 3. venum, 4. wason, 5. john Wike, escoge la pelicula que mas te guste')
    )
        switch (peliculas) {
            case 1:
                document.write(`
                <table>
                    <tr>
                        <th>nombre</th>
                        <th>fecha de lanzamiento</th>
                        <th>de que Trata</th>
                        <th>imagen</th>
                    </tr>
                    <tr>
                        <td>${generoPelicula.accion.peliculaAccion1}</td>
                        <td>12/06/2002</td>
                        <td>esuna pelicula en la cual hay personas con un don y quieren hacer algo con sus vidas y quieren salvar a la gente</td>
                        <td><img src="../../clasE2/img/avengers.jpeg"></td>
                    </tr>
                </table>
                `)
                break;

                case 2:
                    document.write(`
                    <table>
                        <tr>
                            <th>nombre</th>
                            <th>fecha de lanzamiento</th>
                            <th>de que Trata</th>
                            <th>imagen</th>
                        </tr>
                        <tr>
                            <td>${generoPelicula.accion.peliculaAccion2}</td>
                            <td>12/06/2002</td>
                            <td>esuna pelicula en la cual hay personas con un don y quieren hacer algo con sus vidas y quieren salvar a la gente</td>
                            <td><img src="../img/avengers.jpeg"></td>
                        </tr>
                    </table>
                    `)
                break;
                case 3:
                    document.write(`
                    <table>
                        <tr>
                            <th>nombre</th>
                            <th>fecha de lanzamiento</th>
                            <th>de que Trata</th>
                            <th>imagen</th>
                        </tr>
                        <tr>
                            <td>${generoPelicula.accion.peliculaAccion3}</td>
                            <td>12/06/2002</td>
                            <td>esuna pelicula en la cual hay personas con un don y quieren hacer algo con sus vidas y quieren salvar a la gente</td>
                            <td><img src="../img/avengers.jpeg"></td>
                        </tr>
                    </table>
                    `)
                break;
                case 4:
                    document.write(`
                    <table>
                        <tr>
                            <th>nombre</th>
                            <th>fecha de lanzamiento</th>
                            <th>de que Trata</th>
                            <th>imagen</th>
                        </tr>
                        <tr>
                            <td>${generoPelicula.accion.peliculaAccion4}</td>
                            <td>12/06/2002</td>
                            <td>esuna pelicula en la cual hay personas con un don y quieren hacer algo con sus vidas y quieren salvar a la gente</td>
                            <td><img src="../../casE2/img/avengers.jpeg"></td>
                        </tr>
                    </table>
                    `)
                        
        default:
            break;
    }
        break;

    default:
        break;
}

// if (genero === generoPelicula.accion) {
    
    
// }