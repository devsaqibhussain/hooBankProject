import styles from '../styles'
import Button from './Button'

const CTA = () => (
    <section className={` bg-black-gradient-2 ${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col gap-4 sm:gap-0 rounded-[20px] `}>
      <div className=' flex-1'>
        <h1 className={`sm:text-[48px] text-[30px] font-poppins text-white`}>Let’s try our service now!</h1>
        <p className={`sm:text-[18px] text-[14px] text-dimWhite font-poppins max-w-[470px] sm:mt:0 mt-10  `}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <Button style={"sm:my-0 my-10 sm:ml-10 ml-0"}/>
    </section>
  )

export default CTA