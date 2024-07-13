import Link from 'next/link'
import React from 'react'
import { SuperLink } from './SuperLink'

const Footer = () => {
  return (
    <div className='self-end pb-4 mt-8 text-sm text-center text-gray-500'>© 2024 Designed and Developed by Tokiniaina - Source code available <SuperLink href="">here</SuperLink>.</div>
  )
}

export default Footer