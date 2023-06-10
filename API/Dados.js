import useSWR from 'swr';
import { fetchDados } from './Times';

export const useDados = () => {
  console.log('useDados begin');
  const { data, error, mutate } = useSWR('dados', fetchDados);

  return {
    dados: data,
    isLoading: !error && !data,
    isError: error,
    atualizarDados: mutate,
  };
};