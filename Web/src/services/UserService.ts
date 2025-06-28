import axiosInstance from '../api/axios';

//Interfaz
export interface User {
  id: number;
  dni: string;
  username: string;
}

// Funciones
export const findUser = async (
  dni: string,
  username: string
): Promise <User | null> => {
  
    try {
    const response = await axiosInstance.get<User>('/usuarios', {
      params: { dni, username }
    });

    return response.data;
    } 
  
  catch (error: unknown) {
    console.error('Error al buscar usuario:', error);
    return null;
  }
};

export default findUser;