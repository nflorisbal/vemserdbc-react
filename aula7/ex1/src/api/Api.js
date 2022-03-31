import axios from 'axios';

const crud = axios.create({
  baseURL: 'https://my-application-teste.herokuapp.com',
});

const viaCep = axios.create({
  baseURL: 'https://viacep.com.br/ws',
});

export { crud, viaCep };