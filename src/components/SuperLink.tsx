import Link from 'next/link'
import React from 'react'

export const SuperLink = ({href, children}:{href: string, children:React.ReactNode}) => {
  return (
    <Link href={href} className='font-semibold border-b text-cyan-400 hover:text-cyan-200 border-cyan-400 hover:border-cyan-200'>{children}</Link>
  )
}
