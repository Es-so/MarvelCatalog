import 'universal-fetch';
import crypto from 'crypto';

// CONF___________________________________________________________________________________

const baseUrl = 'http://gateway.marvel.com:80/';
const charactersUri = 'v1/public/characters';
const stamp = Math.round(+new Date() / 1000);
const publicKey = '298bab46381a6daaaee19aa5c8cafea5';
const privateKey = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
const hash = crypto.createHash('md5').update(`${stamp}${privateKey}${publicKey}`).digest('hex');

// ________________________________________________________________________________________


const checkStatus = (result) => {
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result;
};

const parserJson = result => result.json();

const requestJson = (uri = '', { method = 'GET' } = {}) => {
  const absoluteUri = `${baseUrl}${charactersUri}${uri}?ts=${stamp}&apikey=${publicKey}&hash=${hash}`;
  const params = { headers: { 'Content-Type': 'application/json' }, method };
  return fetch(absoluteUri, params)
    .then(checkStatus).then(parserJson);
};

export default requestJson;
