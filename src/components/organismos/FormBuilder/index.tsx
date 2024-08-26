import React, { useMemo, useCallback } from 'react';
import {
  Checkbox,
  ComboboxItem,
  Grid,
  MultiSelect,
  NumberInput,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from '@mantine/core';
import { FormBuildWrapper } from './styles';
import InputCnpj from '../../atomos/InputCnpj';
import { Inputcpf } from '../../atomos/InputCpf';
import { FormButton } from '@/components/moleculas/FormButton';
import { estadosECidades, nomesFazendas } from '@/API/produtor';
import { UseFormReturnType } from '@mantine/form';

export interface Field {
  type: string;
  placeholder?: string;
  name: string;
  label: string;
  focus?: boolean;
  options?: Array<{ value: string; label: string }>;
  col: number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}

interface FormBuilderProps {
  fields: Field[];
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
  onClick?: () => void;
  onCancel?: () => void;
  form: UseFormReturnType<any>;
}

const MemoizedGridCol = React.memo(
  ({ children, span }: { children: JSX.Element; span: number }) => (
    <Grid.Col span={span}>{children}</Grid.Col>
  )
);

function FormBuilder({ fields, form, onCancel, onClick }: FormBuilderProps) {
  const estadosData: string[] = useMemo(() => Object.keys(estadosECidades), []);
  const estadosValue: string = useMemo(() => form.getInputProps('estado').value ?? 'SP', [form]);

  const cidadesData: string[] = useMemo(() => estadosECidades[estadosValue] ?? [], [estadosValue]);

  const mappedFields = useMemo(
    () =>
      fields?.map((field) => {
        const { type, placeholder, name, label, options, col, required, maxLength, focus, ref } =
          field;

        const { value, ...inputProps } = form.getInputProps(name);

        switch (type) {
          case 'select':
            return (
              <MemoizedGridCol span={col} key={name}>
                <Select
                  data-autofocus={focus}
                  label={label}
                  data={options}
                  placeholder={placeholder}
                  required={required}
                  {...form.getInputProps(name)}
                  {...inputProps}
                />
              </MemoizedGridCol>
            );

          case 'text':
            return (
              <MemoizedGridCol span={col} key={name}>
                <TextInput
                  data-autofocus={focus}
                  ref={ref}
                  maxLength={maxLength}
                  placeholder={placeholder}
                  label={label}
                  {...form.getInputProps(name)}
                  {...inputProps}
                />
              </MemoizedGridCol>
            );

          case 'number':
            return (
              <MemoizedGridCol span={col} key={name}>
                <NumberInput
                  data-autofocus={focus}
                  min={0}
                  placeholder={placeholder}
                  label={label}
                  withAsterisk={required}
                  maxLength={maxLength}
                  {...form.getInputProps(name)}
                  {...inputProps}
                />
              </MemoizedGridCol>
            );

          case 'password':
            return (
              <MemoizedGridCol span={col} key={name}>
                <PasswordInput
                  data-autofocus={focus}
                  placeholder={placeholder}
                  value={value ?? ''}
                  label={label}
                  withAsterisk={required}
                  maxLength={maxLength}
                  {...inputProps}
                />
              </MemoizedGridCol>
            );

          case 'checkbox':
            return (
              <MemoizedGridCol span={col} key={name}>
                <Checkbox data-autofocus={focus} label={label} checked={value} {...inputProps} />
              </MemoizedGridCol>
            );

          case 'textarea':
            return (
              <MemoizedGridCol span={col} key={name}>
                <Textarea
                  autosize
                  label={label}
                  withAsterisk={required}
                  data-autofocus={focus}
                  {...inputProps}
                />
              </MemoizedGridCol>
            );

          case 'cnpj':
            return (
              <MemoizedGridCol span={col} key={name}>
                <InputCnpj form={form} focus={focus} />
              </MemoizedGridCol>
            );

          case 'cpf':
            return (
              <MemoizedGridCol span={col} key={name}>
                <Inputcpf form={form} focus={focus} />
              </MemoizedGridCol>
            );

          case 'estado':
            return (
              <MemoizedGridCol span={col} key={name}>
                <Select
                  data-autofocus={focus}
                  label={label}
                  {...form.getInputProps(name)}
                  data={estadosData}
                  placeholder={placeholder}
                  required={required}
                  {...inputProps}
                />
              </MemoizedGridCol>
            );

          case 'cidade':
            return (
              <MemoizedGridCol span={col} key={name}>
                <Select
                  data-autofocus={focus}
                  disabled={typeof estadosValue == 'undefined'}
                  label={label}
                  data={cidadesData}
                  placeholder={placeholder}
                  required={required}
                  {...form.getInputProps(name)}
                  {...inputProps}
                />
              </MemoizedGridCol>
            );

          case 'fazenda':
            return (
              <MemoizedGridCol span={col} key={name}>
                <Select
                  data-autofocus={focus}
                  label={label}
                  data={nomesFazendas}
                  placeholder={placeholder}
                  required={required}
                  {...form.getInputProps(name)}
                  {...inputProps}
                />
              </MemoizedGridCol>
            );

          case 'culturasPlantadas':
            return (
              <MemoizedGridCol span={col} key={name}>
                <MultiSelect
                  data-autofocus={focus}
                  label={label}
                  withAsterisk={required}
                  {...form.getInputProps(name)}
                  {...inputProps}
                  data={['Soja', 'Milho', 'Algodão', 'Café', 'Cana de Açucar']}
                />
              </MemoizedGridCol>
            );

          default:
            return null;
        }
      }),
    [fields, form, estadosData]
  );

  return (
    <form>
      <FormBuildWrapper>
        <Grid align="end" gutter="lg">
          {mappedFields}
        </Grid>
        <Grid align="end" gutter="lg">
          <Grid.Col span={12} mt={9}>
            <FormButton onClick={onClick!} onCancel={onCancel} />
          </Grid.Col>
        </Grid>
      </FormBuildWrapper>
    </form>
  );
}

export default FormBuilder;
