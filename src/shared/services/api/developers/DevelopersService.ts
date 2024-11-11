import { Api } from '../axios-config';

interface IDeveloper {
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

const getAll = async (): Promise<IDeveloper[] | Error> => {
  try {
    const { data } = await Api.get('/developer/get-developers');
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

const getById = async (): Promise<any> => {};

const create = async (): Promise<any> => {};

const updateById = async (): Promise<any> => {};

const deleteById = async (): Promise<any> => {};

export const DevelopersService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};
