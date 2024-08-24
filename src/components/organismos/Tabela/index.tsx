import {
  MRT_ColumnDef,
  MRT_RowData,
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table';
import { ActionIcon, Button } from '@mantine/core';
import { VscTrash, VscEdit } from 'react-icons/vsc';
import { FiPlusCircle } from 'react-icons/fi';
import { TfiReload } from 'react-icons/tfi';
import { MRT_Localization_PT_BR } from '../../../utils/tableLocale';
import * as S from './styles';
import { theme } from '@/styles/theme';

interface TabelaProps<T extends MRT_RowData> {
  data: T[];
  columns: MRT_ColumnDef<any>[];
  handleEditar?: (plan: any) => void;
  handleDeleteItem?: (plan: any) => void;
  handleAddTable?: () => void;
  handleActive?: () => void;
  handleInactive?: () => void;
  handleDoubleClick?: (dado: any) => void;
  onChangeTab?: (tab: string) => void;
  refetch?: () => void;
  enableRowSelection?: boolean;
  enableRowActions?: boolean;
  loading?: boolean;
}

function Table<T extends MRT_RowData>({
  data,
  handleEditar,
  handleDeleteItem,
  handleDoubleClick,
  handleAddTable,
  handleActive,
  handleInactive,
  refetch,
  loading,
  enableRowSelection = false,
  enableRowActions = true,
  columns,
}: TabelaProps<T>) {
  const table = useMantineReactTable({
    columns,
    data: data,
    enableRowActions: enableRowActions,
    enableExpanding: false,
    enableRowSelection: enableRowSelection,
    state: {
      showLoadingOverlay: loading,
      isLoading: loading,
    },
    paginationDisplayMode: 'pages',
    mantinePaginationProps: {
      // showRowsPerPage: false,
    },
    initialState: { density: 'xs' },
    positionActionsColumn: 'last',
    localization: MRT_Localization_PT_BR,
    enablePagination: true,
    mantineTableBodyCellProps: ({ cell }: any) => ({
      onDoubleClick: () => {
        handleDoubleClick && handleDoubleClick(cell.row.original);
      },
    }),
    renderTopToolbarCustomActions: ({ table }) => (
      <S.RenderToolbar>
        {handleAddTable && (
          <Button
            color={theme.colors.blue}
            onClick={() => handleAddTable()}
            leftSection={<FiPlusCircle />}
          >
            ADICIONAR
          </Button>
        )}
        {refetch && (
          <Button color="green" onClick={() => refetch()} leftSection={<TfiReload />}>
            ATUALIZAR
          </Button>
        )}

        {handleActive && (
          <Button color="green" onClick={() => handleActive()}>
            ATIVOS
          </Button>
        )}
        {handleInactive && (
          <Button color="red" onClick={() => handleInactive()}>
            INATIVOS
          </Button>
        )}
      </S.RenderToolbar>
    ),
    renderRowActions: ({ row }) => (
      <S.ActionIconsWrapper>
        {handleEditar && (
          <ActionIcon
            color={theme.colors.blue}
            variant="light"
            onClick={() => {
              handleEditar && handleEditar(row.original);
            }}
          >
            <VscEdit />
          </ActionIcon>
        )}
        {handleDeleteItem && (
          <ActionIcon
            color={theme.colors.red}
            variant="light"
            onClick={() => {
              handleDeleteItem && handleDeleteItem(row.original);
            }}
          >
            <VscTrash />
          </ActionIcon>
        )}
      </S.ActionIconsWrapper>
    ),
  });

  return (
    <>
      <S.TableContainer>
        <MantineReactTable table={table} />
      </S.TableContainer>
    </>
  );
}

export default Table;
