fetch('https://mbo-sd.nl/period3-fetch/games-pc-epic-games')
    .then(function (Epic) {
        return Epic.json();
    })
    .then(function (data) {
        console.log(data);
        showEpic(data)
    })

const Epic = document.querySelector('.Epiciko');

function showEpic(EpicData) {
    console.log(EpicData);


    for (let a = 0; a < EpicData.length; a++) {
        const b = EpicData[a];


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
        Epic.innerHTML += card
    }
}