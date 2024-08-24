import produtores from '@/API/produtor';
import { FadingComponent } from '@/components/atomos/FadeAnimation';
import { Loading } from '@/components/atomos/Loading';
import { ModalDelete } from '@/components/moleculas/ModalDelete';
import Table from '@/components/organismos/Tabela';
import { useProdutores } from '@/hooks/useProdutores';
import { produtoresInitialValues, produtoresSchema, ProdutorType } from '@/interfaces/produtores';
import { useLoadingCreator } from '@/store/loading/use-loading-store';
import { useForm, zodResolver } from '@mantine/form';
import { useMutation, useQuery } from '@tanstack/react-query';
import { MRT_ColumnDef } from 'mantine-react-table';
import { useMemo, useState } from 'react';
import { useStore } from 'zustand';

export const Produtor = () => {
  const { handleGetAllProdutores, handleDeleteProdutor } = useProdutores();
  const { loading } = useStore(useLoadingCreator);
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'nomeProdutor',
        header: 'Nome Produtor',
      },

      {
        accessorKey: 'nomeFazenda',
        header: 'Nome Fazenda',
      },
      {
        accessorKey: 'totalHectares',
        header: 'Total de hectares',
      },
      {
        accessorKey: 'areaAgricultavel',
        header: 'Área agricultável',
      },
      {
        accessorKey: 'areaVegetacao',
        header: 'Área de vegetação',
      },
      {
        accessorKey: 'culturasPlantadas',
        header: 'Culturas Plantadas',
      },
    ],
    []
  );

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['produtores'],
    queryFn: () => handleGetAllProdutores(),
  });

  const form = useForm<ProdutorType>({
    initialValues: produtoresInitialValues,
    validate: zodResolver(produtoresSchema),
  });

  const deleteProdutor = useMutation({
    mutationFn: () => handleDeleteProdutor(form.values.id),
    onSuccess: () => {
      refetch();
      form.setValues(produtoresInitialValues);
      setOpenModalDelete(false);
    },
  });

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <FadingComponent duration={700}>
          <Table<ProdutorType>
            loading={loading}
            handleDeleteItem={(user) => {
              setOpenModalDelete(true);
              form.setValues(user);
            }}
            handleDoubleClick={(user) => {
              user.senha = null;
              form.setValues(user);
              setOpenModal(true);
            }}
            columns={columns}
            handleEditar={(user) => {
              form.setValues(user);
              setOpenModal(true);
            }}
            data={data! ?? []}
            handleAddTable={() => {
              form.setValues(produtoresInitialValues);
              setOpenModal(true);
            }}
          />
        </FadingComponent>
      )}

      <ModalDelete
        setOpened={setOpenModalDelete}
        onClose={() => setOpenModalDelete(false)}
        onConfirm={() => deleteProdutor.mutate()}
        opened={openModalDelete}
        description={`Tem certeza que deseja deletar o produtor ${form.values.nomeProdutor}?`}
      />
    </div>
  );
};
