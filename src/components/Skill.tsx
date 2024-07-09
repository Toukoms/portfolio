import ImageWithErrorHandler from '@/components/ImageWithErrorHandler';
import React from 'react'

type Props = Skill

const Skill = (props: Props) => {
  return (
    // OPTIMIZE: Improve Skill component styles by changing the container 
    <div className='h-fit flex items-center gap-2 border border-cyan-200 p-2 rounded-md'>
        <div className='h-28 w-28'>
            <ImageWithErrorHandler src={props.logoSrc} alt={props.logoSrc} className='object-scale-down object-center w-full h-full' errorMessage=' ' />
        </div>

        <p className='w-fit border-l border-gray-400 pl-4 text-sm text-gray-300'>{props.description}</p>
    </div>
  )
}

export default Skill