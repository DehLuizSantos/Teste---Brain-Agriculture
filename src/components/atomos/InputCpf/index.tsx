import { TextInput } from '@mantine/core';
import { CpfMasketTextField, removeAllEspetialCaracters } from '../../../utils/validates';
import { UseFormReturnType } from '@mantine/form';
import { ClientType } from '../../../interfaces/client.interface';

interface InputcpfProps {
  form: UseFormReturnType<ClientType>;
  focus?: boolean;
}

export const Inputcpf = ({ form, focus }: InputcpfProps) => {
  return (
    <TextInput
      data-autofocus={focus}
      {...form.getInputProps('documento')}
      value={CpfMasketTextField(form.getInputProps('documento')?.value)}
      onChange={(event) =>
        form.setFieldValue('documento', removeAllEspetialCaracters(event.target.value))
      }
      label={'CPF'}
      maxLength={14}
      error={form.getInputProps('cpf')?.error}
      placeholder={'000.000.000-00'}
    />
  );
};
