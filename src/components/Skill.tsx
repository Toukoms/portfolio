import ImageWithErrorHandler from '@/components/ImageWithErrorHandler';
import React from 'react'

type Props = Skill

const Skill = (props: Props) => {
  return (
    // OPTIMIZE: Improve Skill component styles by changing the container 
    <div className='h-fit flex items-center gap-2 border border-primary p-2 rounded-md'>
        <div className='h-16 w-16'>
            <ImageWithErrorHandler src={props.image} alt={props.image} className='object-scale-down object-center w-full h-full' errorMessage=' ' />
        </div>

        <p className='w-fit font-montserrat font-medium pl-4 text-lg'>{props.name}</p>
    </div>
  )
}

export default Skill