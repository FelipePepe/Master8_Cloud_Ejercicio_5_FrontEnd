import { Employee } from './employee-list.api-model';
import { mockEmployeeList } from './employee-list.mock-data';
import axios from 'axios';

let employeeList = [...mockEmployeeList];

const url = `${process.env.BASE_API_URL}/api/members`;

export const getEmployeeList = async (): Promise<Employee[]> => {
  return axios.get(`${url}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }).then(res => res.data);
};

export const deleteEmployee = async (id: string): Promise<boolean> => {
  employeeList = employeeList.filter(e => e.idMember !== id);
  return true;
};
