import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

export interface IUser {
  nome: string;
  email: string;
}

export const TestYup = (): JSX.Element => {
  const [user, setUser] = useState<IUser>({
    nome: '',
    email: '',
  });

  const schema = Yup.object({
    nome: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(schema),
  });

  console.log(
    'errors',
    Object.values(errors).map((err) => err.message),
  );

  const submit = (data: IUser) => {
    const cleanData = {
      nome: data.nome.trim(),
      email: data.email.trim(),
    };
    console.log(cleanData);
    setUser(cleanData);
  };

  return (
    <div className="App">
      <h1>Teste com Yup</h1>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder="Digite seu nome" {...register('nome')} />

        <input type="text" placeholder="Digite seu email" {...register('email')} />
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {/* {errors.nome && <li>{errors.nome.message}</li>}
        {errors.email && <li>{errors.email.message}</li>} */}
        {Object.values(errors).map((err, i) => (
          <li key={i}>{err.message as string}</li>
        ))}
      </ul>

      <hr />
      <small>Nome: {user.nome}</small>
      <br />
      <small>Email: {user.email}</small>
    </div>
  );
};
