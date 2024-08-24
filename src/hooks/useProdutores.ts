import { LoginType, ClientType } from '../interfaces/client.interface';
import store from 'store2';
import { useQueryClient } from '@tanstack/react-query';
import produtores from '@/API/produtor';
import { useStore } from 'zustand';
import { useprodutoresStore } from '@/store/produtores/produtores-store-creator';
import { useLoadingCreator } from '@/store/loading/use-loading-store';

export const useProdutores = () => {
  const { produtores, deleteProdutor } = useStore(useprodutoresStore);
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

  /* const queryClient = useQueryClient();
  const handleLogout = () => {
    store.session.set('nome', '');
    store.session.set('adm', '');
    store.session.set('email', '');
    store.session.set('id', '');
    queryClient.setQueryData(['userData'], undefined);
  }; */

  return { handleGetAllProdutores, handleDeleteProdutor };
};
