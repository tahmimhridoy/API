const searchResult = () =>{
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    // console.log(searchText)


    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayAllSearchPlayers(data.player))
    searchInput.value = '';
}

const displayAllSearchPlayers = players =>{
    // console.log(players);
//     for(const player of players){
//         console.log(player);
//     }
    players.forEach(player =>{
        console.log(player);
        const searchPlayers = document.getElementById('search-players');
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.innerHTML = `
            <div class="card mb-3" style="width: 18rem;">
                <img class="card-img-top" src="${player.strThumb}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${player.strPlayer}</h5>
                <p class="card-text">Position: ${player.strPosition}</p>
                <button onclick="seeDetails('${player.idPlayer}')" class="btn btn-primary">See details</button>
            </div>
            </div>
        `
        searchPlayers.appendChild(div);
    })
}

const seeDetails = playersId =>{
    console.log(playersId);
}
