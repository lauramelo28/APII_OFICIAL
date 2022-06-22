const params = new URLSearchParams(location.search); //
let id = params.get('id');

let apiUrl = 'https://api.themoviedb.org/3/movie/' + id + '?' + 'api_key=3d976d0316fc7765939b6e028d8ae96f' + '&language=pt-BR';


function showMovie(){
    let sectionTela = document.getElementById('divDetalheFilme');
    let texto = '';

    let dados = JSON.parse(this.responseText);
    console.log(dados);

    texto = texto + `
    <div class="card" style="width: 18rem;">
<img class="card-img-top" src="https://image.tmdb.org/t/p/w500${dados.poster_path}" alt="Card image cap">
<div class="card-body">
    <p class="card-text">${dados.overview}</p>
</div>
<br>
<ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>Popularidade:</strong> ${dados.popularity} </li>
    <li class="list-group-item"><strong>Data de lançamento:</strong> ${dados.release_date} </li>
    <li class="list-group-item"><strong>Avaliação:</strong> ${dados.vote_average}</li>
</ul>
</div>    
`;

    sectionTela.innerHTML = texto;
}

function getMovies(url){
    let xhr = new XMLHttpRequest();

    xhr.onload = showMovie;
    xhr.open('GET', url, false);
    xhr.send();
}

getMovies(apiUrl);