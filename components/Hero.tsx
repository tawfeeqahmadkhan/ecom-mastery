import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
             <h1 className="bold-20 lg:bold-48">From Zero to E-Commerce Hero: Dropshipping and Amazon Courses</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        Unlock the secrets of successful e-commerce with our comprehensive course (by Shahid anwar). Whether you’re a beginner or an experienced entrepreneur, dive into the world of dropshipping, learn Amazon’s best practices, and elevate your business to hero status
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            1k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
        <Button 
            type="button" 
            title="50% off" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
          <Button 
            type="button" 
            title="Get course" 
            variant="btn_green" 
          />
         
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
    <video src="https://res.cloudinary.com/dotymukks/video/upload/v1716096124/q36qk1fwcowcloeozyzu.mp4#t=1"  autoPlay className='w-[50rem] h-[26rem]' controls></video>
      </div>
    </section>
  )
}

export default Hero