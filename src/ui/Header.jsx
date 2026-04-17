import { Button } from '@heroui/react'
import React from 'react'

let links = ['Home', 'Features', 'Process', 'Testimonials']

function Header() {
  return (
    <div className="flex items-center justify-between px-[16px] py-[24px] bg-[#FEF7EB]">
    <div className="inline-flex flex-col justify-start items-start">
    <div className="justify-center text-Primary-Normal text-xl font-bold font-['Manrope'] leading-7">SanctuaryHealth</div>
</div>
      <div className='flex gap-[32px]'>
        {links.map(link => <a className='text-[#475569]'>{link}</a>)}
      </div>
      <div className='flex gap-[16px] items-center'>
        <a className='text-[#5C97F8]'>Sign up</a>
        <Button color="success" className='text-white font-bold bg-[#5C97F8]'>
          Emergency Care
        </Button>
      </div>
    </div>
  )
}

export default Header
