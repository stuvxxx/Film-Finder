const filmUl = document.getElementById("filmlist");
const radAll = document.getElementById("all")
const radAvengers = document.getElementById("avengers")
const radXmen = document.getElementById("xmen")
const radPrincess = document.getElementById("princess")
const radBatman = document.getElementById("batman")
const radAllNew = document.getElementById("allnew")

const addFilm = function(x) {
    const filmLi = document.createElement("li");
    filmLi.id = x.title;
    filmLi.className = "films"
    filmUl.appendChild(filmLi);
    const img = document.createElement("img");
    filmLi.appendChild(img);
    img.src = x.poster
    img.onclick = function() {
        window.location.href = "https://www.imdb.com/title/" + x.imdbID;
    }
 }



movies.map((x) => {
    addFilm(x)
})

radAll.addEventListener("change", function() {
    const listItems = document.querySelectorAll("li")
    listItems.forEach(x => {
        x.remove();
    });
    document.getElementById("header-text").innerHTML = "All Movies"
    movies.map((x) => {
        addFilm(x)
}
)})

radAvengers.addEventListener("change", function() {
    const listItems = document.querySelectorAll("li")
    listItems.forEach(x => {
        x.remove();
    });
    const avengersFilms = movies.filter((x) => {
        return (x.title.includes("Avengers"))
    })
    document.getElementById("header-text").innerHTML = "Avengers"
    avengersFilms.map((x) => {
        addFilm(x)
    })
})

radXmen.addEventListener("change", function() {
    const listItems = document.querySelectorAll("li")
    listItems.forEach(x => {
        x.remove();
    });
    const xmen = movies.filter((x) => {
        return (x.title.includes("X-Men"))
    })
    document.getElementById("header-text").innerHTML = "X-men"
    xmen.map((x) => {
        addFilm(x)
    })
})

radPrincess.addEventListener("change", function() {
    const listItems = document.querySelectorAll("li")
    listItems.forEach(x => {
        x.remove();
    });
    const princess = movies.filter((x) => {
        return (x.title.includes("Princess"))
    })
    document.getElementById("header-text").innerHTML = "Princess"
    princess.map((x) => {
        addFilm(x)
    })
})

radBatman.addEventListener("change", function() {
    const listItems = document.querySelectorAll("li")
    listItems.forEach(x => {
        x.remove();
    });
    const batman = movies.filter((x) => {
        return (x.title.includes("Batman"))
    })
    document.getElementById("header-text").innerHTML = "Batman"
    batman.map((x) => {
        addFilm(x)
    })
})

radAllNew.addEventListener("change", function() {
    const listItems = document.querySelectorAll("li")
    listItems.forEach(x => {
        x.remove();
    });
    const allNew = movies.filter((x) => {
        return x.year >= "2014"
    })
    document.getElementById("header-text").innerHTML = "All new"
    allNew.map((x) => {
        addFilm(x)
    })
})

