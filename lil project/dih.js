const movies_API = "https://ghibliapi.vercel.app/films";
window.onload = function() {
    loadfilms();
};

async function loadfilms() {
    try {
        //inform loading
        document.getElementById("container-movie").innerHTML = "<h3>Loading...</h3>";
        //fetch data from API
        const response = await fetch(movies_API);
        //bad connection
        if (!response.ok) throw new Error("Bad connection");
        //extract data from response, object to json
        const data = await response.json();
        //render film list
        renderFilm(data)
    } catch (error) {
        //if fectch fail by bad connection
        document.getElementById("container-movie").innerHTML = `<h3>Can't load data</h3>`;
    }
}

function renderFilm(films) {
    const html = films.map(film =>
        `<div class="movie-card">
        <img src="${film.image}" alt="${film.title}"/>
    </div> `
    ).join(``);
    document.getElementById("container-movie").innerHTML = html;
}