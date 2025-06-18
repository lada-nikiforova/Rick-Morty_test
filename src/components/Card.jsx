import React from 'react'
import { Link } from 'react-router'

const Card = ({hero}) => {
  return (
    <Link to={`character/${hero.id}`} className='flex flex-col rounded-2xl  min-h-80 w-70 border-3 border-gray px-5 py-3'>
        <p className='font-bold text-green text-xl mb-2'>{hero.name}</p>
        <div className='flex justify-center'>
            <img className='w-50 rounded-2xl mb-2' src={hero.image} alt="image" />
        </div>
        <div className='text-black'>
            <p><span className=' text-orange font-bold'>Specie:</span> {hero.species}</p>
            <p><span className='text-orange font-bold'>State:</span> {hero.status}</p>
            <p><span className='text-orange font-bold'>Location:</span> {hero.location.name}</p>
        </div>
        
      
    </Link>
  )
}

export default Card
