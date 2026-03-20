import icons from '../assets/images/Img'
import buttons from '../assets/componentClasses/allClasses'
import { Link } from 'react-router-dom'

export default function Home({count, setCount, firstPlayer}) {

  function firstCount(id) {
      firstPlayer.current = id
      setCount(firstPlayer.current)
      console.log(firstPlayer)
  }

  return (
    <main className='container-pro pd-t-lg text-center'>
      <div className='mx-auto w-[325px] sm:w-[467px] flex flex-col py-10 sm:py-16 px-2 sm:px-5
                      rounded-md border-5 border-gray-400'>
        <h2 className='mb-10'>Pick a icon to go first</h2>

        <div className='flex justify-center gap-15 mb-10'> 
          <button onClick={() => {firstCount('o')}}
          className='rounded-md ring-3 ring-gray-200 p-5
                bg-transparent focus:bg-gray-200 focus:ring-3 focus:ring-gray-500 hover:bg-gray-200 hover:ring-0 transition-colors duration-300'>
            <img src={icons.oval} alt="" />
          </button>

          <button onClick={() => {firstCount('x')}}
          className='rounded-md ring-3 ring-gray-200 p-5
                bg-transparent focus:bg-gray-200 focus:ring-3 focus:ring-gray-500 hover:bg-gray-200 hover:ring-0 transition-colors duration-300'>
            <img src={icons.x} alt="" />
          </button>
        </div>

        <div className='w-fit mx-auto flex items-center gap-3 mb-15'>
          <img src={count==='o' ? icons.oval : icons.x} alt=""  className='w-8 h-8'/>
          <h2>will go first</h2>
        </div>

        <Link to='/gamestart' className={buttons.primaryBtn}>new game</Link>
      </div>
    </main>
  )
}
