import {apple, bill, google} from '../assets'
import styles, { layout } from '../styles'
const Billing = () =>(
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] z-[5]'/>
        <div className=' absolute z-3 top-0 -left-1/2 white__gradient w-[50%] h-[50%] rounded-full' />
        <div className=' absolute z-0 bottom-0 -left-1/2 pink__gradient w-[50%] h-[50%] rounded-full' />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={` text-white font-poppins ${styles.heading2}`}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
        <p className={` text-dimwhite max-w-[470px] font-poppins ${styles.paragraph}`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className='flex flex-row mt-5 gap-2'>
          <img src={apple} alt='apple store' className='w-[144px] h-[43px] object-contain cursor-pointer' />
          <img src={google} alt='google play store' className='w-[144px] h-[43px] object-contain cursor-pointer' />
        </div>
      </div>
    </section>
  )

export default Billing