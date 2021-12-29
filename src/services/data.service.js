const playerKey = 'player';
const optionKey = 'option';

export const savePlayers = (player) => {
  sessionStorage.setItem(playerKey, JSON.stringify(player))
}

export const getPlayers = () => {
  return JSON.parse(sessionStorage.getItem(playerKey));
}

export const saveOptions = (options) => {
  sessionStorage.setItem(optionKey, JSON.stringify(options));
}

export const getOptions = () => {
  return JSON.parse(sessionStorage.getItem(optionKey));
}