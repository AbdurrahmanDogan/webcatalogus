fetch('https://mbo-sd.nl/period3-fetch/games-pc-riot-games')
    .then(function (Riot) {
        return Riot.json();
    })
    .then(function (data) {
        console.log(data);
        showRiot(data)
    })

const Riotiko = document.querySelector('.Riotiko');

function showRiot(RiotData) {
    console.log(RiotData);


    for (let a = 0; a < RiotData.length; a++) {
        const b = RiotData[a];


        const card = `
        <div class="col-md-4 pt-2 d-flex">
        <div class="card">
        <img class="card-img-top" src="${b.img}"
        alt= "card image cap">
        <div class=card-body">
        <h4 class="card-title text-danger fw-bold">${b.title}</h4>
        <h4 class="card-text text-success">${b.activePlayers}</h4>
        <h4 class="card-text fw-light">${b.description}</h4>
        <h4 class="card-text">${b.downloadFrom}</h4>
        <p class="card-text">${b.genres}</p>
        <p class="card-text">${b.releaseData}</p>
        </div>
        </div>
        </div>
        `;
        Riotiko.innerHTML += card
    }
}