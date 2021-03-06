import { GAME_ID, getFetchUrl, getPostUrl } from './GLOBALS';

const sortScore = scores => {
  scores.result.sort((score1, score2) => score1.score - score2.score);
  return scores;
}

const getGameData = async () => {
  try {
    const result = await fetch(getFetchUrl(GAME_ID), {mode: 'cors', headers: {'Content-Type': 'application/json',},},);
    if (!result.ok)
    throw new Error ('Result is not okay');
      const data = await result.json();
      return sortScore(data);
  } catch (error) {
    console.log('cant fetch data', error);
    return { result: [] };
  }
};


const saveNewScore = (data) => {
  fetch(getPostUrl(GAME_ID), {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });
};
export { getGameData, saveNewScore };