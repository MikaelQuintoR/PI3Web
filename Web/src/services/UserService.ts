export const findUser = async (dni: string, username: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/usuarios?dni=${dni}&username=${username}`);
    if (!response.ok) return null;

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al buscar usuario:', error);
    return null;
  }
};

export default findUser;