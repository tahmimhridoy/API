const searchResult = () =>{
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    // console.log(searchText)
    document.getElementById('search-players').innerHTML = '';
    document.getElementById('player-info').innerHTML = '';
    if(searchText == ''){
        const error = document.getElementById('error');
        error.innerText = 'Please write your favorite player name.';
    }
    else{
        // display spinner
        document.getElementById('spinner').style.display = 'block';
        error.innerHTML = '';
        const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`
        // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => displayAllSearchPlayers(data.player))
    }
    searchInput.value = '';
}

const displayAllSearchPlayers = players =>{
    // console.log(players);
//     for(const player of players){
//         console.log(player);
//     }
    if(players == null){
        const error = document.getElementById('error');
        error.innerText = `can't found`;
    }else{
    players.forEach(player =>{
        // console.log(player);
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
        const div1 = searchPlayers.appendChild(div);
    })}
    document.getElementById('spinner').style.display = 'none';
}

const seeDetails = playersId =>{
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playersId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPlayerInfo(data.players[0]));
}

const displayPlayerInfo = details => {
    console.log(details);
    const playerInfo = document.getElementById('player-info');
    const div = document.createElement('div');
    document.getElementById('search-players').innerHTML = '';
    div.innerHTML = `
        <div class="border rounded mb-3 d-flex">
            <img src="${details.strThumb}" class="card-img-top w-50" alt="...">
            <div class="card-body">
                <h5 class="card-title">${details.strPlayer}</h5>
                <p class="card-text">Description: ${details.strDescriptionEN ? details.strDescriptionEN.slice(0, 200) : 'Oh! sorry, I have no description.'}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `
    const div2 = playerInfo.appendChild(div);
}