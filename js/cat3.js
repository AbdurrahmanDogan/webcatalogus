fetch('https://mbo-sd.nl/period3-fetch/games-mobile-niantic')
    .then(function (niantic) {
        return niantic.json();
    })
    .then(function (data) {
        console.log(data);
        showNiantici(data)
    })

const niantici = document.querySelector('.niantici');

function showNiantici(nianticData) {
    console.log(nianticData);


    for (let a = 0; a < nianticData.length; a++) {
        const b = nianticData[a];


        const card1 = `
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
        niantici.innerHTML += card1
    }
}
