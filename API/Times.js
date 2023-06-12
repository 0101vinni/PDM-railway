import axios from "axios";
import useSWR from 'swr';

const API_BASE_URL = "https://backend-aos-production.up.railway.app"; // altere para a sua URL de API

export const fetchDados = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/times`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useDados = () => {
  const { data, error, mutate } = useSWR('dados', fetchDados);

  return {
    dados: data,
    isLoading: !error && !data,
    isError: error,
    atualizarDados: mutate,
  };
};
////////////////////////////////////////////////////////////////////////////////////////////////

export const fetchDadosElenco = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/elenco`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useDadosElenco = () => {
  const { data, error, mutate } = useSWR('dadosElenco', fetchDadosElenco);

  return {
    dadosElenco: data,
    isLoading: !error && !data,
    isError: error,
    atualizarDados: mutate,
  };
};
