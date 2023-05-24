fetch('https://mbo-sd.nl/period3-fetch/games-pc-blizzard-entertainment')
    .then(function (Blizzard) {
        return Blizzard.json();
    })
    .then(function (data) {
        console.log(data);
        showBlizzard(data)
    })

const blizzard = document.querySelector('.Blizzardiko');

function showBlizzard(blizzardData) {
    console.log(blizzardData);


    for (let a = 0; a < blizzardData.length; a++) {
        const b = blizzardData[a];


        const card = `
        <div class="col-md-4 pt-2 d-flex">
        <div class="card">
        <img class="card-img-top" src="${b.img}"
        alt= "card image cap">
        <div class=card-body">
        <h4 class="card-title text-danger fw-bold">${b.title}</h4>
        <h4 class="card-text text-success">${b.genres}</h4>
        <h4 class="card-text fw-light">${b.description}</h4>
        <h4 class="card-text">${b.releaseDate}</h4>
        <p class="card-text">${b.genres}</p>
        <p class="card-text">${b.price}</p>
        </div>
        </div>
        </div>
        `;
        blizzard.innerHTML += card
    }
}