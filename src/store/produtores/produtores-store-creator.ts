import { create } from 'zustand';
import { ProdutorType } from '../../interfaces/produtores';
import produtores from '@/API/produtor';

interface ProdutorestoreType {
  produtores: ProdutorType[];
  addProdutor: (produtor: ProdutorType) => void;
  editProdutor: (produtorId: number | null, updatedprodutor: ProdutorType) => void;
  deleteProdutor: (produtorId: number | null) => void;
}

export const useprodutoresStore = create<ProdutorestoreType>()((set) => ({
  produtores: produtores,
  addProdutor: (produtor) => set((state) => ({ produtores: [...state.produtores, produtor] })),
  editProdutor: (produtorId, updatedprodutor) =>
    set((state) => ({
      produtores: state.produtores.map((produtor) =>
        produtor.id === produtorId ? { ...produtor, ...updatedprodutor } : produtor
      ),
    })),
  deleteProdutor: (produtorId) =>
    set((state) => ({
      produtores: state.produtores.filter((produtor) => produtor.id !== produtorId),
    })),
}));
