// import axiosInstance from '../api/axios';

//Interfaz
export interface UserData {
  firstname: string;
  lastname: string;
  dni: string;
  email: string;
  age: string;
  username: string;
}

export interface User extends UserData {
  id: string;
}

// Funciones
export class UserService {

  static async createUser(data: UserData): Promise<User> {
    await new Promise((res) => setTimeout(res, 500));

    return {
      id: '2',
      ...data,
    };
  }

  static async findUser(dni: string, username: string): Promise<{ id: number; dni: string; username: string } | null> {
    await new Promise((res) => setTimeout(res, 300));

    if (dni === '72411321' && username === 'mikaelqr') {
      return {
        id: 1,
        dni: '72411321',
        username: 'mikaelqr',
      };
    }

    return null;
  }
}

export default UserService