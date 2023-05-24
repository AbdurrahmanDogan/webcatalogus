fetch('https://mbo-sd.nl/period3-fetch/games-mobile-disney-interactive')
    .then(function (disney) {
        return disney.json();
    })
    .then(function (data) {
        console.log(data);
        showDisney(data)
    })

const disneyiko = document.querySelector('.disneyiko');

function showDisney(disneyData) {
    console.log(disneyData);


    for (let a = 0; a < disneyData.length; a++) {
        const b = disneyData[a];


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
        disneyiko.innerHTML += card
    }
}
