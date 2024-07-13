import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export const SuperLink = ({href, children}:{href: string, children:React.ReactNode}) => {
  return (
    // TODO: change the default active and focus style to just border bottom
    <Button variant={"link"} className="p-0 focus-visible:ring-0 focus-visible:rounded-none focus-visible:inline focus-visible:border-b-2 border-primary" asChild><Link href={href}>{children}</Link></Button>
  )
}
