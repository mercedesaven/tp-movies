const apiKey = "1b63eaf9251799c15f140837c94d7a45"

const initialize = () => {
fetch('https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}')
    .then(response => response.json())
    .then(res => {
        console.log(res)
        popularMovies(res.results)
    })
}

const popularMovies = (popularMovies) => {
    let popularMovieDiv = document.getElementById('pop-mov')
    
    popularMovies.forEach(e => {
        
    let popularMovieTitle = document.createElement('h1')
    let popularMovieGeners = document.createElement('h2')
    let popularMovieOverview = document.createElement('p')

    popularMovieTitle.innerText= e.title
    popularMovieGeners.innerText = e.release_date
    popularMovieOverview.innerText = e.overview
    
    popularMovieDiv.appendChild(popularMovieTitle)
    popularMovieDiv.appendChild(popularMovieGeners)
    popularMovieDiv.appendChild(popularMovieOverview)
    })


    
} 