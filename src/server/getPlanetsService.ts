import { IListPaginated } from 'models/listPaginated';
import { IPlanet } from 'models/planet';
import { IResult } from 'models/result';
import api from 'server/api';

export const getPlanetsService = async (): Promise<
  IResult<IListPaginated<IPlanet[]> | null>
> => {
  try {
    const result = await api.get<IListPaginated<IPlanet[]>>('/planets');
    return {
      Data: result.data,
      Message: '',
      Success: true,
    };
  } catch (error) {
    return {
      Data: null,
      Message: '',
      Success: false,
    };
  }
};
