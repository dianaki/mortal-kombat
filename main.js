const arenas = document.querySelector('.arenas');

const player1 = {
  name: 'Scorpion',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['gun', 'rifle', 'knife'], 
  attack: function() {
    console.log(player1.name + ' ' + 'Fight...');
  }
};

const player2 = {
  name: 'Kitana',
  hp: 90,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['spoon', 'fork', 'knife'], 
  attack: function() {
    console.log(player2.name + ' ' + 'Fight...');
  }
};

function createPlayer(className, player) {
  const playersField = document.createElement('div');
  playersField.classList.add(className);

  const progressBar = document.createElement('div');
  progressBar.classList.add('progressbar');
  playersField.appendChild(progressBar);

  const character = document.createElement('div');
  character.classList.add('character');
  playersField.appendChild(character);

  const life = document.createElement('div');
  life.classList.add('life');
  life.style.width = player.hp + '%';
  progressBar.appendChild(life);
  
  const name = document.createElement('div');
  name.classList.add('name');
  name.innerText = player.name;
  progressBar.appendChild(name);

  const img = document.createElement('img');
  img.src = player.img;
  character.appendChild(img);

  arenas.appendChild(playersField);
}

createPlayer('player1', player1);
createPlayer('player2', player2);