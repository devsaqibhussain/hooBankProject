import styles from '../styles'
import {logo} from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col divide-y-2 divide-dimWhite/20`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className=' flex flex-col justify-start mr-10 flex-1'>
          <img src={logo} className=' max-w-[268px] object-contain'/>
          <p className={`${styles.paragraph} ${styles.padding} max-w-[470px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className=' flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 gap-10 md:mx-0 mx-5 '>
          {footerLinks.map((footerLink,index)=>(
            <div key={index} className='flex flex-col min-w-[150px] '>
              <h4 className=' font-poppins text-[18px] text-white font-semibold leading-[60px]'>{footerLink.title}</h4>
              <ul className=' list-none text-dimWhite flex flex-col gap-4'>
                {footerLink.links.map((link,index)=>(
                  <li key={index} ><a href={link.link} className=' font-poppins font-normal text-[16px] hover:text-secondary cursor-pointer leading-[24px]'>{link.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className=' flex xs:flex-row flex-col justify-between items-center gap-4 xs:gap-0 w-full pt-10'>
        <p className='text-[16px] text-dimWhite'>2021 HooBank. All Rights Reserved.</p>
        <div className='flex flex-row gap-4 justify-center'>
          {socialMedia.map((social)=>(
            <img key={social.id} src={social.icon}/>
          ))}
        </div>
      </div>
    </section>
  )

export default Footer