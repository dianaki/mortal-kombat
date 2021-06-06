const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['gun', 'rifle', 'knife'],
  attack: function () {
    console.log(player1.name + ' ' + 'Fight...');
  }
};

const player2 = {
  player: 2,
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['spoon', 'fork', 'knife'],
  attack: function () {
    console.log(player2.name + ' ' + 'Fight...');
  }
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  $tag.classList.add(className);

  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
};

function createPlayer(player) {
  const playersField = createElement('div', 'player' + player.player);
  const progressBar = createElement('div', 'progressbar');
  const character = createElement('div', 'character');
  const life = createElement('div', 'life');
  const name = createElement('div', 'name');
  const img = createElement('img');

  life.style.width = player.hp + '%';
  name.innerText = player.name;
  img.src = player.img;

  progressBar.appendChild(name);
  progressBar.appendChild(life);

  character.appendChild(img);

  playersField.appendChild(progressBar);
  playersField.appendChild(character);

  return playersField;
};

function randomNummer() {
  randomHp =  Math.ceil(Math.random() * 20);

  return randomHp;
}

function changeHP(player) {
  const playerLife = document.querySelector('.player' + player.player + ' .life');
  player.hp -= randomNummer();
  playerLife.style.width = player.hp + '%';

  if (player.hp <= 0) {
    player.hp = 0;
    whoWinner(player1, player2);
  }
};

function playerWins(name) {
  const winsTitle = createElement('div', 'winsTitle');
  winsTitle.innerText = name + ' wins';

  return winsTitle;
};

function whoWinner(player1, player2) {
  if (player1.hp > player2.hp) {
    arenas.appendChild(playerWins(player1.name));
  } else if (player2.hp > player1.hp) {
    arenas.appendChild(playerWins(player2.name));
  }
  randomButton.disabled = true;
};

randomButton.addEventListener('click', () => {
  changeHP(player1);
  changeHP(player2);
});

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));