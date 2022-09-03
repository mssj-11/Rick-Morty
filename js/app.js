function getCharacters(info){

    const results = fetch('https://rickandmortyapi.com/api/character');
    results
        .then(response => response.json())
        .then(data => {
            info(data);
        });
}

getCharacters(data => {
    data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(`
            <article>
                <div class="image-container">
                    <img src="${personaje.image}" alt="Personaje">
                </div>
        
                <h2>${personaje.name}</h2>
                <span>Gender:<b>${personaje.gender}</b></span>
                <span>Status:<b>${personaje.status}</b></span>
                <span>Species:<b>${personaje.species}</b></span>
            </article>
        `);
        // Mostrando en el contenedor
        const main = document.querySelector('main');
        main.append(article);
    });
});