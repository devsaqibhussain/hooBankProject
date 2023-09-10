import { arrowUp } from '../assets'
import styles from "../styles"

const GetStarted = () => {
  return (
    <div className=' cursor-pointer h-[140px] w-[140px] rounded-full bg-blue-gradient p-[2px]'>
      <div className=' flex flex-col justify-center items-center w-full h-full rounded-full bg-primary'>
        <div className='flex flex-row justify-start items-center'>
          <p className={` text-gradient mr-4 font-poppins font-medium text-[18px]`}>Get</p>
          <img src={arrowUp}/>
        </div>
        <p className='text-gradient mr-2 font-poppins font-medium text-[18px]'>Started</p>
      </div>
    </div>
  )
}

export default GetStarted