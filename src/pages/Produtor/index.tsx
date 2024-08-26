import produtores from '@/API/produtor';
import { FadingComponent } from '@/components/atomos/FadeAnimation';
import { Loading } from '@/components/atomos/Loading';
import { ModalDefault } from '@/components/moleculas/ModalDefault';
import { ModalDelete } from '@/components/moleculas/ModalDelete';
import FormBuilder, { Field } from '@/components/organismos/FormBuilder';
import Table from '@/components/organismos/Tabela';
import { useProdutores } from '@/hooks/useProdutores';
import { produtoresInitialValues, produtoresSchema, ProdutorType } from '@/interfaces/produtores';
import { useLoadingCreator } from '@/store/loading/use-loading-store';
import { Group, Radio } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useMutation, useQuery } from '@tanstack/react-query';
import { MRT_ColumnDef } from 'mantine-react-table';
import { useMemo, useState } from 'react';
import { useStore } from 'zustand';
import { formBuildPropsFisical, formBuildPropsJuridical } from './constants';

export const Produtor = () => {
  const { handleGetAllProdutores, handleDeleteProdutor, handlePostProdutor, handlePutProdutor } =
    useProdutores();
  const { loading } = useStore(useLoadingCreator);
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [isFisicalPerson, setIsFisicalPerson] = useState('fisica');
  const [formBuildToRender, setFormBuildToRender] = useState(formBuildPropsFisical);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'nomeProdutor',
        header: 'Nome Produtor',
      },
      {
        accessorKey: 'documento',
        header: 'CPF ou CNPJ',
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
        accessorKey: 'estado',
        header: 'Estado',
      },
      {
        accessorKey: 'cidade',
        header: 'Cidade',
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
    mode: 'controlled',
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

  const addEditProdutor = useMutation({
    mutationFn: (data: ProdutorType) =>
      data.id ? handlePutProdutor(data.id, data) : handlePostProdutor(data),
    onError: (error: any) => {
      console.error(error);
      notifications.show({
        title: 'Erro',
        color: 'red',
        message: String(error.response.data.message),
      });
      refetch();
    },
    onSuccess: () => {
      notifications.show({
        title: 'Sucesso',
        message: `Usuário ${form.values.id ? 'editado' : 'cadastrado'} com sucesso!`,
      });
      refetch();
      setOpenModal(false);
    },
  });

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <FadingComponent duration={500}>
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

      <ModalDefault
        title={form.values.id ? 'Editar produtor' : 'Adicionar produtor'}
        size="lg"
        opened={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <>
          <Radio.Group
            name="isPessoaFisica"
            label="Pessoa fisica ou juridica?"
            value={isFisicalPerson}
            onChange={(e) => {
              setIsFisicalPerson(e);
              setFormBuildToRender(
                e === 'fisica' ? formBuildPropsFisical : formBuildPropsJuridical
              );
            }}
            style={{ margin: '20px 0' }}
          >
            <Group mt="xs">
              <Radio value="fisica" label="Fisíca" />
              <Radio value="juridica" label="Jurídica" />
            </Group>
          </Radio.Group>

          <FormBuilder
            form={form}
            onSubmit={form.onSubmit((values) => addEditProdutor.mutate(values))}
            onCancel={() => {
              setOpenModal(false);
              form.reset();
            }}
            fields={formBuildToRender}
          />
        </>
      </ModalDefault>
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
