import styles from '../styles'
import { feedback } from '../constants'
import FeedBackCards from './FeedBackCards'
const Testimonials = () => (
    <section className=' relative mt-10'>
      <div className=' flex flex-col'>
        <div className='flex md:flex-row flex-col md:items-center md:justify-evenly'>
          <h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] `}>What people are <br className='sm:block hidden'/>saying about us</h2>
          <p className={`${styles.paragraph} text-dimwhite font-poppins font-normal max-w-[470px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className=' flex md:flex-row flex-col mt-10 gap-4 justify-center items-center'>
          {feedback.map((feedback)=>(
            <FeedBackCards key={feedback.id} {...feedback}/>
          ))}
        </div>
      </div>
      <div className=' absolute top-0 xl:-right-1/3 -right-1/2 z-[3] h-[100%] w-[50%] rounded-full blue__gradient'/>
    </section>
  )


export default Testimonials