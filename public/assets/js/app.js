let movies = document.querySelector('.movies')
let filmIndex = 0


fetch('./public/assets/js/movies.json')
    .then(res => res.json())
    // .then(data => console.log(data.results))
    .then(data => data.results.forEach(movie => {
        console.log(movie.overview)
        let poster = movie.poster_path
        let title = movie.original_title
        let pitch = movie.overview
        let score = movie.vote_average*10
        movies.innerHTML += `<article class="card"> 
        <img src="${poster}" alt="poster de ${title}">
        <div class="cardText">
        <h4 class="title">${title}</h4>
        <div class="textMask">
        <div class="pitch">${pitch}</div>
        </div>
        <div class="score">${score} %</div>
        </div>
    </article>`
        
    }));
    