import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVE, PVP } from './Battle';

const player1 = new Character('Link');
const player2 = new Character('Ganodorf');
const player3 = new Character('Zelda');

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

export { player1, player2, player3 };

const monster1 = new Monster();
const monster2 = new Dragon();

export { monster1, monster2 };

const pvp = new PVP(player2, player3);

export { pvp };

const pve = new PVE(player1, [monster1, monster2]);

export { pve };

const runBattles = (param: Battle[]) => {
  param.forEach((item) => item.fight());
};

export { runBattles };