import React, { useEffect, useState } from 'react'
import getAll from '../api/apiRickMorty';
import Card from '../components/Card';

const PageList = () => {
    const [charact, setCharact] = useState([]);
    const [name, setName] = useState('');
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    
    const fetchCharacters = async (searchName = '', pageNum = 1) => {
        try{
            setError(null);
            const data = await getAll(searchName, pageNum);
            setCharact(data.results);
        }
        catch(err){
            setCharact([])
            setError(err.message);
            
        }
    };
    useEffect(() => {
        window.scrollTo(0,0);
        
        fetchCharacters(name, page);
        console.log(page);
    }, [name,page]);
    const handleSearch = () =>{
        setPage(1)
        fetchCharacters(name, 1);
    }
    const handleClear = () =>{
        fetchCharacters();
        setName('');
    }
    const handleNext = () => setPage((prev) => prev + 1);
    const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
    
  return (
    <div className='py-4'>
        <div className='h-9 flex justify-center mb-4 '>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-80 h-full mr-3 rounded-[12px] px-2 border-2 border-orange'/>
            <button onClick={handleSearch} className='border-2 px-2 h-full rounded-[12px] border-green mr-3 cursor-pointer hover:bg-green'>Найти</button>
            <button onClick={handleClear} className='border-2 px-2 h-full rounded-[12px] border-red-700 cursor-pointer hover:bg-red-700'>Сбросить</button>
        </div>
        <div className='flex flex-wrap justify-center gap-4 mb-3'>
            {error ? (
                <p>{error}</p>
            ) : (
                charact.map((hero) => (
                    <Card key={hero.id} hero={hero}/>))
            )}
        </div>
        <div className='h-8 flex justify-center'>
            <button onClick={handlePrev} className='border-2 px-2 h-full rounded-[12px] border-gray mr-3 cursor-pointer hover:bg-gray'>Назад</button>
            <button onClick={handleNext} className='border-2 px-2 h-full rounded-[12px] border-gray mr-3 cursor-pointer hover:bg-gray'>Вперед</button>
        </div>

      
    </div>
  )
}

export default PageList
