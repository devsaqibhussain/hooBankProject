import {card} from '../assets'
import styles, { layout } from '../styles'
import Button from './Button'

const CardDeal = () => (
  <section id="product" className={`${layout.section}`}>
  
  <div className={`${layout.sectionInfo}`}>
    <h2 className={` text-white font-poppins ${styles.heading2}`}>Find a better card deal <br className='sm:block hidden'/> in few easy steps.</h2>
    <p className={` text-dimwhite max-w-[470px] font-poppins ${styles.paragraph}`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
    <Button style={"mt-4"} />
  </div>
  <div className={`${layout.sectionImgReverse}`}>
    <img src={card} alt="billing" className='w-[100%] h-[100%] z-[5]'/>
    <div className=' absolute z-3 top-0 -left-1/2 white__gradient w-[50%] h-[50%] rounded-full' />
    <div className=' absolute z-0 bottom-0 -left-1/2 pink__gradient w-[50%] h-[50%] rounded-full' />
  </div>
</section>
  )


export default CardDeal