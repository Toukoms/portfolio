import ImageWithErrorHandler from '@/components/ImageWithErrorHandler';
import React from 'react'

const Skill = (props: SkillProps) => {
  return (
    <div className='h-fit flex items-center border border-primary p-2 rounded-md'>
        <div className='h-12 w-12'>
            <ImageWithErrorHandler src={props.image} alt={props.image} className='object-scale-down object-center w-full h-full'/>
        </div>

        <p className='w-fit font-montserrat font-medium pl-4 text-lg'>{props.name}</p>
    </div>
  )
}

export default Skill