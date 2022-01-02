import Game from '../database/Game/GameDef'

const dbInit = () => Promise.all([
    Game.sync(),
]);

export default dbInit;
