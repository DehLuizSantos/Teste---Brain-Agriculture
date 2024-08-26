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
import { useForm, UseFormReturnType, zodResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useMutation, useQuery } from '@tanstack/react-query';
import { MRT_ColumnDef } from 'mantine-react-table';
import { useMemo, useState } from 'react';
import { useStore } from 'zustand';
import { formBuildPropsFisical, formBuildPropsJuridical } from './constants';
import { validateCnpj, validateCpf } from '@/utils/validates';
import PageHeader from '@/components/moleculas/PageHeader';

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

  const { data, refetch } = useQuery({
    queryKey: ['produtores'],
    queryFn: () => handleGetAllProdutores(),
  });

  const form = useForm<ProdutorType>({
    mode: 'controlled',
    initialValues: produtoresInitialValues,
    validate: {
      areaAgricultavel: (value) => (value === 0 ? 'O valor não pode ser 0' : null),
      areaVegetacao: (value) => (value === 0 ? 'O valor não pode ser 0' : null),
      totalHectares: (value, values) =>
        values.areaAgricultavel + values.areaVegetacao > value || value === 0
          ? 'A soma de área agrícultável e vegetação, não deverá ser maior que a área total da fazenda'
          : null,
      documento: (value) =>
        isFisicalPerson === 'fisica'
          ? validateCpf(value)
            ? null
            : 'CPF invalido'
          : validateCnpj(value)
            ? null
            : 'CNPJ invalido',
      nomeFazenda: (value) => (value.length === 0 ? 'O nome da fazenda é obrigatorio' : null),
      nomeProdutor: (value) => (value.length === 0 ? 'O nome do produtor é obrigatorio' : null),
      culturasPlantadas: (value) =>
        value.length === 0 ? 'Deve haver pelo menor 1 selecionada' : null,
    },
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
    <>
      <FadingComponent duration={500}>
        <PageHeader info="Adicione, edite ou delete produtores" title="Produtor" />

        <Table<ProdutorType>
          loading={loading}
          handleDeleteItem={(user) => {
            setOpenModalDelete(true);
            form.setValues(user);
          }}
          handleDoubleClick={(user) => {
            form.setValues(user);
            if (user.documento.length !== 14) {
              setIsFisicalPerson('juridica');
            }
            setOpenModal(true);
          }}
          columns={columns}
          handleEditar={(user) => {
            form.setValues(user);
            if (user.documento.length !== 14) {
              setIsFisicalPerson('juridica');
            }
            setOpenModal(true);
          }}
          data={data! ?? []}
          handleAddTable={() => {
            form.setValues(produtoresInitialValues);
            setOpenModal(true);
          }}
        />
      </FadingComponent>

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
            onClick={() => {
              if (form.validate().hasErrors) {
                return;
              }
              addEditProdutor.mutate(form.values);
            }}
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
    </>
  );
};
