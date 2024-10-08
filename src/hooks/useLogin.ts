import { useNavigate } from 'react-router-dom';
import { LoginType } from '../interfaces/login.interface';
import store from 'store2';
import { useQueryClient } from '@tanstack/react-query';

export const useLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (form: LoginType) => {
    const formData = {
      nome: 'Admin',
      email: form.login,
      id: 1,
    };

    store.session.set('nome', formData.nome);
    // store.session.set('adm', res.data.adm);
    store.session.set('email', formData.email);
    store.session.set('id', formData.id);
    return formData;
  };

  const queryClient = useQueryClient();
  const handleLogout = () => {
    store.session.set('nome', '');
    store.session.set('adm', '');
    store.session.set('email', '');
    store.session.set('id', '');
    queryClient.setQueryData(['userData'], undefined);
    navigate('/');
  };

  return { handleLogin, handleLogout };
};
