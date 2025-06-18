import React, { useEffect, useState } from 'react'
import getHero from '../api/apiCharacter';
import { Link, useParams } from 'react-router';

const PageHero = () => {
    const { id } = useParams();
    const [hero, setHero] = useState([]);
    const fetchHero = async (id) => {
        const data = await getHero(id);
        setHero(data);
    };
    useEffect(() => {
        fetchHero(id);
    }, []);
    const info = [
        { name: 'Gender', label: hero.gender},
        { name: 'Location', label: hero.location?.name},
        { name: 'Species', label: hero.species },
        { name: 'Origin', label: hero.origin?.name},
        { name: 'Status', label: hero.status},
    ];
  return (
    <div className=' flex flex-col items-center mt-3 text-center'>
        <p className='text-3xl font-bold text-green mb-2'>{hero.name}</p>
        <img className='rounded-2xl mb-2' src={hero.image} alt="image" />
        <div className=' flex flex-col text-start gap-3 mb-5'>
            {info.map(({name, label}) =>
                <p key={name} className='text-black'><span className='font-bold text-orange'>{name}:</span> {label}</p>
            )}
        </div>
        <Link className='border-2 px-3 py-2 rounded-[12px] border-green mr-3 cursor-pointer hover:bg-green' to={'/'}>Назад к персонажам</Link>
    </div>
  )
}

export default PageHero
