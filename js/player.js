const players = [
    {
        name: 'IGOR SHATSKIY',
        position: 'GOALKEEPER',
        image: 'https://kff.kz/uploads/images/2023/09/05/64f6efa6e6008_avatar.jpg',
    },
    {
        name: 'ERKIN TAPALOV',
        position: 'DEFENDER',
        image: 'https://kff.kz/uploads/images/2023/09/05/64f6ede533e7f_avatar.jpg',
    },
    {
        name: 'MARAT BYSTROV',
        position: 'DEFENDER',
        image: 'https://kff.kz/uploads/images/2023/09/05/64f766d563ca7_avatar.jpg',
    },
    {
        name: 'ALEXANDR MAROCHKIN',
        position: 'DEFENDER',
        image: 'https://kff.kz/uploads/images/2023/09/05/64f75b11c1a33_avatar.jpg',
    },
    {
        name: 'NURALY ALIP',
        position: 'DEFENDER',
        image: 'https://kff.kz/uploads/images/2023/09/05/64f75aa3ceccb_avatar.jpg',
    },
    {
        name: 'BAKTIYOR ZAINUTDINOV',
        position: 'MIDFIELDER',
        image: 'https://kff.kz/uploads/images/2023/09/05/64f7667954058_avatar.jpg',
    },
    {
        name: 'ASKHAT TAGYBERGEN',
        position: 'MIDFIELDER',
        image: 'https://kff.kz/uploads/images/2023/09/05/64f6eff87d994_avatar.jpg',
    },
    {
        name: 'ABZAL BEISEBEKOV',
        position: 'MIDFIELDER',
        image: 'https://kff.kz/uploads/images/2023/09/05/64f75a54f11ea_avatar.jpg',
    },
    {
        name: 'RAMAZAN ORAZOV',
        position: 'MIDFIELDER',
        image: 'https://kff.kz/uploads/images/2023/09/05/64f7669e2f7ba_avatar.jpg',
    },
    {
        name: 'ELKHAN ASTANOV',
        position: 'MIDFIELDER',
        image: 'https://kff.kz/uploads/images/2023/09/05/64f6ee7652144_avatar.jpg',
    },
    {
        name: 'ISLAM CHESNOKOV',
        position: 'MIDFIELDER',
        image: 'https://kff.kz/uploads/images/2023/09/05/64f6ec75dc69f_avatar.jpg',
    },
    {
        name: 'Maxim Samorodov',
        position: 'FORWARD',
        image: 'https://kff.kz/uploads/images/2023/09/05/64f6eecb52172_avatar.jpg',
    },
    {
        name: 'ABAT AIMBETOV',
        position: 'FORWARD',
        image: 'https://kff.kz/uploads/images/2023/09/05/64f6efdb30408_avatar.jpg',
    },
    {
        name: 'RAMAZAN KARIMOV',
        position: 'FORWARD',
        image: 'https://kff.kz/uploads/images/2023/09/05/64f6ee9458d88_avatar.jpg',
    },
    {
        name: 'VLADISLAV PROKOPENKO',
        position: 'FORWARD',
        image: 'https://kff.kz/uploads/images/2023/09/05/64f6ed82c4a2a_avatar.jpg',
    }
];

//create player HTML element
function createPlayerElement(player) {
    const playerElement = document.createElement('div');
    playerElement.classList.add('player');
    let img = '';
    if (player.position === 'GOALKEEPER') {
        img = 'max-width: 250px;';
    }
    playerElement.innerHTML = `
    <img src="${player.image}" alt="${player.name}" style="${img}">
    <h3>${player.name}</h3>
    <p>Position: ${player.position}</p>
  `;
    return playerElement;
}

//display players in a specific formation
function displayPlayers(formationId, playersArray) {
    const formationContainer = document.querySelector(`.${formationId}`);
    playersArray.forEach((player) => {
        const playerElement = createPlayerElement(player);
        formationContainer.appendChild(playerElement);
    });
}

// Display players in different formations
displayPlayers('formation1', [players[0]]);
displayPlayers('formation2', players.slice(1, 5));
displayPlayers('formation3', players.slice(5, 9));
displayPlayers('formation5', players.slice(9, 11));
displayPlayers('formation4', players.slice(11));


