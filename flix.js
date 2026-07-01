// MOVIE DATA (12 movies)
var movies = [
    { title: "Spider-Man: No Way Home", poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", trailer: "https://www.youtube.com/embed/JfVOs4VSpmA?si=TT_CtsnsmppHFS4f",desc: "Peter Parker seeks Doctor Strange's help to make his identity secret again." },
    { title: "Despicable Me 4", poster: "https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg", trailer: "https://www.youtube.com/embed/qQlr9-rF32A?si=S83kJ6rq8piX3co5", desc: "Gru faces a new nemesis while juggling family life and minion mischief." },
    { title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", trailer: "https://www.youtube.com/embed/zSWdZVtXT7E?si=70w8gwy35GkEjOYL",desc: "A team of explorers travel through a wormhole to save humanity."},
    { title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", trailer: "https://www.youtube.com/embed/EXeTwQWrcwY?si=Se55Md6QYHtCjKRQ",desc: "Batman faces the Joker, a criminal mastermind who throws Gotham into chaos." },
    {title: "Inception", desc: "a professional thief who steals corporate secrets by infiltrating his targets' dreams.", poster:"https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg", trailer: "https://www.youtube.com/embed/YoHD9XEInc0?si=l-7txlgKB-DcRdll"},
    { title: "The Matrix", poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", trailer: "https://www.youtube.com/embed/vKQi3bBA1y8?si=StMFV1ndog4A_7LM",desc: "A hacker discovers reality is a simulation and joins a rebellion." },
    { title: "Forrest Gump", poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", trailer: "https://www.youtube.com/embed/bLvqoHBptjg?si=o6_1DiqTR6qQzfQk",desc: "A man with a low IQ witnesses and influences historical events." },
    { title: "Pulp Fiction", poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", trailer: "https://www.youtube.com/embed/tGpTpVyI_OQ?si=CW61NV-rnkC-08O-",desc: "Intertwined tales of hitmen, a boxer, and a gangster's wife." },
    { title: "The Shawshank Redemption", poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", trailer: "https://www.youtube.com/embed/PLl99DlL6b4?si=vbshvXyvmAd2CnXt",desc: "Two imprisoned men bond over years, finding redemption." },
    { title: "The Godfather", poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", trailer: "https://www.youtube.com/embed/UaVTIH8mujA?si=Aas7BdXHxZYHgFUm", desc: "A crime dynasty's aging patriarch transfers power to his son."},
    { title: "Fight Club", poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", trailer: "https://www.youtube.com/embed/qtRKdVHc-cE?si=1S_6P56MrJOWi4b_", desc: "An insomniac and a soap maker form an underground fight club." },
    { title: "Obsession", poster: "https://tse2.mm.bing.net/th/id/OIP.udObI7glNKsWSgP2c5cXCwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", trailer: "https://www.youtube.com/embed/gMC8kkwbIQQ?si=yPiCZeCsh2-wY0WR",desc:"a music store employee named Bear who buys a novelty One Wish Willow to make his crush, Nikki, love him" }
];

// PAGE SWITCH
function enterApp() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
    startBillboard();
}

// BILLBOARD
var billIndex = 0;

function updateBillboard(index) {
    var movie = movies[index];
    document.getElementById('billTitle').textContent = movie.title;
    document.getElementById('billLogline').textContent = movie.desc;
    document.getElementById('billboard').style.backgroundImage = "url(" + movie.poster + ")";
}

function startBillboard() {
    updateBillboard(0);
    setInterval(function () {
        billIndex = billIndex + 1;
        if (billIndex >= movies.length) { billIndex = 0; }
        updateBillboard(billIndex);
    }, 5000);
}

function playTrailer(index) {
    var movie = movies[index];
    var video = document.getElementById('videoPlayer');
    video.src = movie.trailer + '?autoplay=1';  // Add autoplay
    document.getElementById('videoContainer').style.display = 'block';
}

function closeTrailer() {
  var video = document.getElementById('videoPlayer');
  video.src = '';
  var container = document.getElementById('videoContainer');
  if (container) {
    container.style.display = 'none';
  }
}

