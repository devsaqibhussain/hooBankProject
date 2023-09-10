import { clients } from '../constants'

const Clients = () => (
    <div className=' flex flex-row justify-evenly flex-wrap items-center gap-4 mt-10' id="clients">
      {clients.map((client)=>(
        <img key={client.id} src={client.logo} className=' sm:w-[192px] w-[100px] object-contain' />
        )
      )
      }
    </div>
  )


export default Clients