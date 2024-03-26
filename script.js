function createPost(name, message, imageURL) {
    return `
    <div class="post">
    <img src="${imageURL}" alt="Rick and Morty">
        <h2>${name}</h2>
        <p>${message}</p>
    </div>
    `;
}

const Contened0r = document.getElementById('Contened0r');

for (let i = 1; i <= 826; i++) {
    const name = `Character ${i}`;
    const message = `Esta es mi publicación número ${i}. Esto es una prueba de generación de relleno por medio de funciones y ciclos.`;
    const imageURL = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`;

    const postHTML = createPost(name, message, imageURL);
    Contened0r.innerHTML += postHTML;
}
