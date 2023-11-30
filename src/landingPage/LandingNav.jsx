import logo from '../assets/Netflix_Logo.png'
import Button from '../components/Button'
const LandingNav = () => {
  return (
    <div className='max-w-6xl px-28 mx-auto justify-between flex  w-full items-center  '>
      <div>
          <img src={logo} alt="logo" className='w-[200px] h-28' />

      </div>
      <div className='flex gap-6'>
          <select style={{background:'rgba( 0, 0, 0, 0.25 )'}} className='border text-lg  border-slate-700 px-8 rounded-[4px] bg-black text-white py-1'>
              <option className='text-base'>English</option>
              <option className='text-base'>Tamil</option>
              <option className='text-base'>Hind</option>
          </select>
          <Button pX={'px-3'} pY={'py-1'} textSize={'text-sm'} rounded={'rounded-[5px]'} >Sign In</Button>
        </div>
      
    </div>
  )
}

export default LandingNav
