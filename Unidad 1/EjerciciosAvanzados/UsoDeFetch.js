//Simula una llamada a una API externa utilizando `fetch` con la URL `"https://jsonplaceholder.typicode.com/posts"`, y procesa los datos para imprimir solo los títulos de los posts.

fetch('https://jsonplaceholder.typicode.com/posts') .then((response) => response.json()).then((data) => {
    data.forEach((post) => {
        console.log(post.title);
    });
});
