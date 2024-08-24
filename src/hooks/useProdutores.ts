import { LoginType, ClientType } from '../interfaces/client.interface';
import store from 'store2';
import { useQueryClient } from '@tanstack/react-query';
import produtores from '@/API/produtor';
import { useStore } from 'zustand';
import { useprodutoresStore } from '@/store/produtores/produtores-store-creator';
import { useLoadingCreator } from '@/store/loading/use-loading-store';
import { ProdutorType } from '@/interfaces/produtores';

export const useProdutores = () => {
  const { produtores, deleteProdutor, addProdutor, editProdutor } = useStore(useprodutoresStore);
  const { setLoading } = useStore(useLoadingCreator);

  const handleGetAllProdutores = (): Promise<typeof produtores> => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(produtores);
        setLoading(false);
      }, 800);
    });
  };

  const handleDeleteProdutor = async (id: number | null) => {
    deleteProdutor(id);
    return produtores;
  };

  const handlePostProdutor = async (produtor: ProdutorType) => {
    const uuid = Math.floor(Math.random() * 1001); // Gera um número inteiro entre 0 e 1000

    const body = {
      ...produtor,
      id: uuid,
    };

    addProdutor(body);
    return produtores;
  };
  const handlePutProdutor = async (id: number | null, produtor: ProdutorType) => {
    editProdutor(id, produtor);
    return produtores;
  };

  return { handleGetAllProdutores, handleDeleteProdutor, handlePostProdutor, handlePutProdutor };
};
