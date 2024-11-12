import { Api } from '../axios-config';

export interface IDeveloper {
  _id: string;
  name: string;
  cpf: string;
  email: string;
  role: string;
  tasks: Array<string>;
  active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface IInsertDeveloper {
  name: string;
  email: string;
  cpf: string;
}

const getAll = async (search: string): Promise<IDeveloper[] | Error> => {
  try {
    const { data } = await Api.get(
      `/developer/get-developers?search=${search}`
    );
    if (data) {
      return data;
    }
    return new Error('Erro ao listar os registros.');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao listar os registros.'
    );
  }
};

const getById = async (idDeveloper: string): Promise<IDeveloper | Error> => {
  try {
    const { data } = await Api.get(`/developer/get-developer/${idDeveloper}`);
    if (data) {
      return data;
    }
    return new Error('Erro ao consultar o registro.');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao consultar o registro.'
    );
  }
};

const create = async (dados: IInsertDeveloper): Promise<IDeveloper | Error> => {
  try {
    const { data } = await Api.post(`/developer/insert-developer`, dados);
    if (data) {
      return data;
    }
    return new Error('Erro ao criar o registro.');
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || 'Erro ao criar o registro.';
    console.error(errorMessage);
    return new Error(errorMessage);
  }
};

const updateById = async (): Promise<any> => {
  try {
    const { data } = await Api.post(
      `/developer/session-developer/update-password`
    );
    if (data) {
      return data;
    }
    return new Error('Erro ao criar o registro.');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao criar o registro.'
    );
  }
};

const inactiveById = async (
  idDeveloper: string
): Promise<IDeveloper | Error> => {
  try {
    const { data } = await Api.patch(
      `/developer/inactive-developer/${idDeveloper}`
    );
    if (data) {
      return data;
    }
    return new Error('Erro ao inativar o registro.');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao inativar o registro.'
    );
  }
};

export const DevelopersService = {
  getAll,
  getById,
  create,
  updateById,
  inactiveById
};
