import { Api } from '../axios-config';

export interface ITasks {
  _id: string;
  description: string;
  responsable: string;
  status: string;
  computer: string;
}

export interface IInsertTask {
  responsable: string;
  description: string;
  status: string;
}

const getAll = async (search: string): Promise<ITasks[] | Error> => {
  try {
    const { data } = await Api.get(`/task/get-all-tasks?search=${search}`);
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

const create = async (dados: IInsertTask): Promise<ITasks | Error> => {
  try {
    const { data } = await Api.post(`/task/insert-tasks`, dados);
    console.log(data);
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

export const TasksService = {
  getAll,
  create
};
