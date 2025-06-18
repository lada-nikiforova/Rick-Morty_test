export const getAll = async(name, page=1) => {
  const url = `https://rickandmortyapi.com/api/character?name=${encodeURIComponent(name)}&page=${page}`;

    try {
      const response = await fetch(url, {
          headers: {
            'content-type': 'application/json',
          },
        });
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error('Ошибка запроса');
      }
      return data;
    } catch (error) {
      console.error("Ошибка получения:", error);
      throw error;
    }
}

export default getAll;