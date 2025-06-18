export const getHero = async(id) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
      try {
        const response = await fetch(url, {
            headers: {
              'content-type': 'application/json',
            },
          });
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error("Ошибка получения:", error);
        throw error;
      }
  }
  
  export default getHero;