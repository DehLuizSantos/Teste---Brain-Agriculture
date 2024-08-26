import { TextInput } from '@mantine/core';
import { CnpjMaskedTextField, removeAllEspetialCaracters } from '../../../utils/validates';
import { UseFormReturnType } from '@mantine/form';
import { ProdutorType } from '../../../interfaces/produtor.interface';
import { MRT_RowData } from 'mantine-react-table';

interface InputCnpjProps {
  form: UseFormReturnType<ProdutorType>;
  focus?: boolean;
}

function InputCnpj({ form, focus }: InputCnpjProps) {
  return (
    <TextInput
      data-autofocus={focus}
      {...form.getInputProps('documento')}
      value={CnpjMaskedTextField(form.getInputProps('documento')?.value)}
      onChange={(event) =>
        form.setFieldValue('documento', removeAllEspetialCaracters(event.target.value))
      }
      label={'CNPJ'}
      maxLength={18}
      error={form.getInputProps('documento')?.error}
      placeholder={'00.000.000/0000-00'}
    />
  );
}

export default InputCnpj;
