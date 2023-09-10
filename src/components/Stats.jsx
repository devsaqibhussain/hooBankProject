import { stats } from "../constants"
import styles from "../styles"

const Stats = () => {
  return (
    <section className=' flex justify-center items-center flex-wrap sm:mb-20 mb-6'>
      {stats.map((stat)=>(
        <div key={stat.id} className={` flex-1 font-poppins   flex justify-center items-center`}>
          <h2 className=" xs:text-[40px] font-semibold text-[30px] text-white xs:leading-[53px] leading-[43px] ">{stat.value}</h2>
          <p className=" text-gradient xs:text-[20px] font-normal text-[15px] ml-4 uppercase xs:leading-[26px] leading-[21px] ">{stat.title}</p>
        </div>
        )
      )}
    </section>
  )
}

export default Stats