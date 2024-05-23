$(document).ready(function() {
    var jsonData = JSON.parse($('#pokemon-data').text());

    $.each(jsonData, function(index, trainer) {
        var trainerName = trainer.entrenador;
        var $trainerDiv = $('<div class="trainer"><h2>' + trainerName + '</h2></div>');

        var $pokemonContainer = $('<div class="pokemon-container"></div>'); // Creamos el contenedor para los pokemones

        $.each(trainer.pokemons, function(index, pokemon) {
            var pokemonName = pokemon.nombre;
            var pokemonType = pokemon.tipo;
            var pokemonImg = pokemon.foto;
            var $pokemonDiv = $('<div class="pokemon"><h3>' + pokemonName + '</h3><img src="' + pokemonImg + '" alt="' + pokemonName + '"></div>');
            
            // Asignamos la clase de tipo al contenedor de cada pokemon
            $pokemonDiv.addClass(pokemonType.toLowerCase());

            $pokemonContainer.append($pokemonDiv); // Agregamos el pokemon al contenedor de pokemones
        });

        $trainerDiv.append($pokemonContainer); // Agregamos el contenedor de pokemones al entrenador
        $('#trainers-list').append($trainerDiv);
    });
});

