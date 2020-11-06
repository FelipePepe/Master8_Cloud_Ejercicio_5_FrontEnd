import { Employee } from './employee.api.model';
import axios from 'axios';

const url = `${process.env.BASE_API_URL}/api/members`;

export const getEmployeeById = async (id: string): Promise<Employee> => {
  return axios.get(`${url}/${id}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  });
};
