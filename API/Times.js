import axios from "axios";
import useSWR from 'swr';

const API_BASE_URL = "https://parseapi.back4app.com/classes/"; // altere para a sua URL de API

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "X-Parse-Application-Id": "aLQLnG7jD35CFlE0VwFDPgHPkb8hXBaMOwi0vHWn",
    "X-Parse-REST-API-Key": "HxqwhdGFlWjPwtK09DoNkjTX1wCMlO6Hkg5dSrh7",
  },
});


export const fetchDados = async () => {
  const response = await instance.get("Times");
  return response.data.results;
};

export const useDados = () => {
  const { data, error, mutate } = useSWR('dados', fetchDados, { refreshInterval: 10000 });

  return {
    dados: data,
    isLoading: !error && !data,
    isError: error,
    atualizarDados: mutate,
  };
};