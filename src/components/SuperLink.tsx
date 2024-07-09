import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export const SuperLink = ({href, children}:{href: string, children:React.ReactNode}) => {
  return (
    <Button variant={"link"} className="p-0" asChild><Link href={href}>{children}</Link></Button>
  )
}
