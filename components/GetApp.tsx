import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-20 lg:bold-40 xl:max-w-[320px]">Get  now!</h2>
          <h2 className=" xl:max-w-[320px]">Language : Urdu | Hindi</h2>
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px] line-through">$100</h2>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="Buy Now"
             
              variant="btn_white"
              full
            />
            <Button 
              type="button"
              title=" Only 50$ "
             
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/courses.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp