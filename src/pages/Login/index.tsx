import { Paper, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import { LoginInitialValues, LoginType, loginSchema } from '../../interfaces/login.interface';
import * as S from './styles';
import { useLogin } from '@/hooks/useLogin';
import FormBuilder from '@/components/organismos/FormBuilder';

export const Login = () => {
  const { handleLogin } = useLogin();
  const navigate = useNavigate();
  const form = useForm<LoginType>({
    initialValues: LoginInitialValues,
    validate: {
      login: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email Invalido'),
      senha: (value) => (value.length < 4 ? 'A senha deve ter ao menos 4 digitos' : null),
    },
  });

  const postLogin = useMutation({
    mutationFn: (data: LoginType) => handleLogin(data),
    onError: (error: any) => {
      console.error(error);
      notifications.show({
        title: 'Erro',
        color: 'red',
        message: String(error.response.data.message),
      });
    },
    onSuccess: () => {
      notifications.show({
        title: 'Sucesso',
        message: 'Login efetuado com sucesso',
      });
      navigate('/dashboard');
    },
  });

  return (
    <>
      <S.LoginWrapper>
        <div className="login">
          <Title>Brain Agriculture</Title>
          <Paper p={40} mt={10} withBorder shadow="md" radius="5px">
            <FormBuilder
              onClick={() => {
                if (form.validate().hasErrors) {
                  return;
                }
                postLogin.mutate(form.values);
              }}
              form={form}
              fields={[
                {
                  col: 12,
                  label: 'Usuário',
                  name: 'login',
                  type: 'text',
                  focus: true,
                },
                {
                  col: 12,
                  label: 'Password',
                  name: 'senha',
                  type: 'password',
                },
              ]}
            />
          </Paper>
        </div>
        <S.BeWelcomeWrapper>
          <h2>Seja Bem Vindo</h2>
        </S.BeWelcomeWrapper>
      </S.LoginWrapper>
    </>
  );
};
