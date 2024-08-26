import { useStore } from 'zustand';
import { useprodutoresStore } from '@/store/produtores/produtores-store-creator';
import { useLoadingCreator } from '@/store/loading/use-loading-store';
import { ProdutorType } from '@/interfaces/produtores';
import { validateCnpj } from '@/utils/validates';

export const useProdutores = () => {
  const { produtores, deleteProdutor, addProdutor, editProdutor } = useStore(useprodutoresStore);
  const { setLoading } = useStore(useLoadingCreator);

  const handleGetAllProdutores = (): Promise<typeof produtores> => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(produtores);
        setLoading(false);
      }, 0);
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
